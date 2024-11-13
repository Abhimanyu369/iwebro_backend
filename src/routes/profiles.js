const express = require("express");
const multer = require("multer");
const Profile = require("../models/Profile");
const ActivityLog = require("../models/ActivityLog");
const path = require("path");
const fs = require("fs");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Upload a new profile
router.post("/", authMiddleware, upload.single("file"), async (req, res) => {
  try {
    const { name, techStacks, experience, passingYear } = req.body;

    if (!name || !techStacks || !experience || !passingYear || !req.file) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newProfile = new Profile({
      name,
      techStacks,
      experience: parseInt(experience, 10),
      passingYear: parseInt(passingYear, 10),
      file: path.join("uploads", req.file.filename),
    });
    await newProfile.save();
    console.log("req.user", req.user);
    // Log the activity
    await ActivityLog.create({
      userId: req.user.userId,
      action: "Uploaded Profile",
      entityId: newProfile._id,
      entityModel: "Profile",
    });
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all profiles
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a profile
router.delete("/:id", authMiddleware, async (req, res) => {
  // try {
  //   await Profile.findByIdAndDelete(req.params.id);
  //   res.status(204).send();
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
  try {
    // Find the profile by ID
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    // Resolve the file path
    const filePath = path.resolve(profile.file);

    // Delete the file if it exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete the profile from the database
    await Profile.findByIdAndDelete(req.params.id);

    // Log the activity
    await ActivityLog.create({
      userId: req.user.userId,
      action: "Deleted Profile",
      entityId: req.params.id,
      entityModel: "Profile",
    });

    res.status(204).send(); // Return a success response
  } catch (error) {
    console.error("Failed to delete profile:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

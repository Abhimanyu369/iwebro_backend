const express = require("express");
const Hiring = require("../models/hiring"); // Create this Mongoose model
const router = express.Router();

// POST: Submit a new hiring request
router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      role,
      experienceLevel,
      budget,
    } = req.body;

    if (!fullName || !email || !phone || !role || !experienceLevel || !budget) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newHiring = new Hiring({
      fullName,
      email,
      phone,
      role,
      experienceLevel,
      budget,
    });

    await newHiring.save();
    res.status(201).json({ message: "Hiring form submitted successfully.", data: newHiring });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form.", error: error.message });
  }
});

// GET: Retrieve all hiring submissions
router.get("/", async (req, res) => {
  try {
    const submissions = await Hiring.find().sort({ createdAt: -1 });
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching submissions.", error: error.message });
  }
});

module.exports = router;

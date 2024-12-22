const express = require("express");
const Query = require("../models/query"); // Import the Query model
const router = express.Router();

// POST: Submit a new query
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, howCanWeHelp, skills, source } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber || !howCanWeHelp) {
      return res.status(400).json({ message: "All required fields must be filled." });
    }

    const newQuery = new Query({
      firstName,
      lastName,
      email,
      phoneNumber,
      howCanWeHelp,
      skills,
      source,
    });

    await newQuery.save();
    res.status(201).json({ message: "Query submitted successfully.", query: newQuery });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while submitting the query.", error: error.message });
  }
});

// GET: Retrieve all queries
router.get("/", async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while retrieving queries.", error: error.message });
  }
});

module.exports = router;

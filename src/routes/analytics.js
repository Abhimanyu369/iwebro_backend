const express = require("express");
const ActivityLog = require("../models/ActivityLog");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const filter = {};

    if (req.user.userId) filter.userId = req.user.userId;

    const activities = await ActivityLog.find(filter)
      .sort({ timestamp: -1 })
      .limit(10).populate('userId', '_id name role');

    res.json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

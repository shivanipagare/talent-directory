const express = require("express");
const Talent = require("../models/Talent");

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { name, email, skills, experience } = req.body;
    if (!name || !email)
      return res.status(400).json({ message: "Name and email are required" });

    const newTalent = await Talent.create({ name, email, skills, experience });
    res.status(201).json(newTalent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { skill } = req.query;
    const filter = skill ? { skills: { $regex: skill, $options: "i" } } : {};
    const talents = await Talent.find(filter).sort({ createdAt: -1 });
    res.json(talents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

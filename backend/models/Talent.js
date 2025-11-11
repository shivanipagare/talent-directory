const mongoose = require("mongoose");

const talentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: [{ type: String }],
  experience: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Talent = mongoose.model("Talent", talentSchema);

module.exports = Talent;

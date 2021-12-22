const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("user", userSchema);
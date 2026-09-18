const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ message: "Please complete every field." });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }
  // A real project could save this message to a database or send an email.
  res.status(201).json({ message: `Thanks, ${name.trim()}! Your message was received.` });
});

module.exports = router;

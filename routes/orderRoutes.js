const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { items, total } = req.body;
  if (!Array.isArray(items) || items.length === 0 || typeof total !== "number") {
    return res.status(400).json({ message: "Your order is missing valid cart information." });
  }
  const orderNumber = `DH-${Date.now().toString().slice(-6)}`;
  res.status(201).json({ message: "Order placed successfully!", orderNumber });
});

module.exports = router;

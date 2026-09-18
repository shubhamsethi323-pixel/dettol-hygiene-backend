const express = require("express");
const cors = require("cors");
const path = require("path");
const productRoutes = require("./routes/productRoutes");
const contactRoutes = require("./routes/contactRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Lets the frontend (Live Server) talk to this API during development.
app.use(express.json());
// Serve the website files too, so beginners only need to start one server.
app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/orders", orderRoutes);

app.use((req, res) => res.status(404).json({ message: "Route not found." }));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const commentsRoutes = require("./routes/commentsRoute");

app.use("/api/comment", commentsRoutes);

const flagRoutes = require("./routes/flagRoute");

app.use("/api/flag", flagRoutes);

const userRoutes = require("./routes/users");

app.use("/api/user", userRoutes);

const listingRoutes = require("./routes/listingsRoute");

app.use("/api/listing", listingRoutes);

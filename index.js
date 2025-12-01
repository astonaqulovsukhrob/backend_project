import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./database.js";

// Routes
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import moduleARoute from "./routes/moduleA.js";
import moduleBRoute from "./routes/moduleB.js";
import moduleCRoute from "./routes/moduleC.js";
import moduleDRoute from "./routes/moduleD.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));

// Start server (async IIFE)
(async () => {
  try {
    await connectDB();
    console.log("MongoDB connected");

    // Routes
    app.use("/people", usersRoutes);
    app.use("/auth", authRoutes);
    app.use("/moduleA", moduleARoute);
    app.use("/moduleB", moduleBRoute);
    app.use("/moduleC", moduleCRoute);
    app.use("/moduleD", moduleDRoute);

    app.get("/", (req, res) => {
      res.send("Welcome to the Users + Modules API!");
    });

    // 404 route
    app.all("*", (req, res) => {
      res.status(404).send("Route not found");
    });

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Server error:", err);
    process.exit(1);
  }
})();

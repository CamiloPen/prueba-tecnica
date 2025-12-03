import express from "express";
import dotenv from "dotenv";

import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running on " + process.env.DB_HOST + process.env.PORT);
});
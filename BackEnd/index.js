import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./src/routes/auth.routes.js";
import taskRoutes from "./src/routes/tasks.routes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: "GET,POST,PATCH,DELETE",
}));

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running on " + process.env.DB_HOST + process.env.PORT);
});
import bcrypt from "bcrypt";
import db from "../config/db.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users(name,email,password) VALUES (?,?,?)",
    [name, email, hashed]
  );

  res.json({ message: "User created" });
};
import fs from "fs";
import dotenv from "dotenv";
import mysql from "mysql2/promise"

dotenv.config();

(async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    multipleStatements: true
  });

  const sql = fs.readFileSync("./src/database/schema.sql", "utf8");
  await connection.query(sql);

  console.log("Base de datos creada!");
  process.exit();
})();

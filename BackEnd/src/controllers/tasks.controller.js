import db from "../config/db.js";

export const getTasks = async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM tasks WHERE user_id = ?",
    [req.user.id]
  );
  res.json(rows);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  await db.query(
    "INSERT INTO tasks(user_id, title, description) VALUES (?, ?, ?)",
    [req.user.id, title, description]
  );

  res.json({ message: "Task created" });
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const closed_at = new Date()

  await db.query(
    "UPDATE tasks SET title=?, description=?, status=? WHERE id=? AND user_id=?",
    [title, description, status, id, req.user.id]
  );

  res.json({ message: "Task updated" });
};

export const deleteTask = async (req, res) => {
  await db.query(
    "DELETE FROM tasks WHERE id=? AND user_id=?",
    [req.params.id, req.user.id]
  );

  res.json({ message: "Task deleted" });
};

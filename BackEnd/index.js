
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running on " + process.env.DB_HOST + process.env.PORT);
});
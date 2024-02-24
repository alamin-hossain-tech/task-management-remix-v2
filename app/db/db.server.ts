import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/task-management";
const DB = mongoose
  .connect(mongoURI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

export default DB;

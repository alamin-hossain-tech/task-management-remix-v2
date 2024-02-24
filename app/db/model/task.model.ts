import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  userId: String,
  collections: Array,
});

const TaskModel = mongoose.model("collections", TaskSchema);
export default TaskModel;

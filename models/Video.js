import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL i required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  view: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const model = mongoose.model("Video", VideoSchema);
export default model;

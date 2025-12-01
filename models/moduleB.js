import mongoose from "mongoose";

const ModuleBSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    moduleA: { type: String, required: true },
    moduleB: { type: String, required: true },
    moduleC: { type: String, required: true },
    moduleD: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("ModuleB", ModuleBSchema);

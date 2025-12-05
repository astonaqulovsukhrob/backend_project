import mongoose from "mongoose";

const ModuleDSchema = new mongoose.Schema(
  {
    name: { type: String, default: null },
    title: { type: String, default: null },
    moduleA: { type: String, default: null },
    moduleB: { type: String, default: null },
    moduleC: { type: String, default: null },
    moduleD: { type: String, default: null },
    img: { type: String, default: null },
    img2: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("ModuleD", ModuleDSchema);

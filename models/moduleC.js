
import mongoose from "mongoose";

const ModuleCSchema = new mongoose.Schema(
  {
    name: { type: String, default: null },
    title: { type: String, default: null },
    moduleA: { type: String, required: true },
    moduleB: { type: String, required: true },
    moduleC: { type: String, required: true },
    moduleD: { type: String, required: true },
     img: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("ModuleC", ModuleCSchema);
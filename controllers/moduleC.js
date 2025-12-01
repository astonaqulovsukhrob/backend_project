import ModuleC from "../models/moduleC.js";

export const getAll = async (req, res) => {
  try {
    const data = await ModuleC.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createOne = async (req, res) => {
  try {
    const item = await ModuleC.create(req.body);
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};

export const getOne = async (req, res) => {
  try {
    const item = await ModuleC.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(404).json({ error: "Not found" });
  }
};

export const deleteOne = async (req, res) => {
  try {
    await ModuleC.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(404).json({ error: "Delete failed" });
  }
};

export const updateOne = async (req, res) => {
  try {
    const item = await ModuleC.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
};
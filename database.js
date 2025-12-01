import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Atlas connected!");
  } catch (error) {
    console.error("MongoDB error:", error);
  }
};

export default connectDB;

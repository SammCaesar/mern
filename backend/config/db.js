import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sam123:sam123@cluster0.wxfweow.mongodb.net/proshop?retryWrites=true&w=majority",
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
   mongoose.connection.on('connected', () => {
    console.log("DB Connected")
   }) 

  mongoose.connect(`${process.env.MONGODB_URL}/shopora`)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("MongoDB error:", err.message);
    process.exit(1);
  });

}

export default connectDB
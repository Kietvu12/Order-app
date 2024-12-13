import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ducanhcutehihi2003:Nhjnconkec09@foodproject.oo1v2.mongodb.net/?retryWrites=true&w=majority&appName=FoodProject"
    )
    .then(() => console.log("DB connect"));
};

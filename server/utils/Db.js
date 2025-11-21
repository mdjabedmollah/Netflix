import mongoose from "mongoose";

export const DB=async()=>{
  try {
    await mongoose.connect(process.env.DBConnetion)
    console.log("Data base connetion ")
  } catch (error) {
    console.log("data base error ")
  }
}


import { User } from "../model/userModel.js";
export const Register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "All data required",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already Exist",
        success: false,
      });
    }
    const newUser = User.create({
      fullname,
      email,
      password,
    });
    await newUser.save()
    return res.status(200).json({
        success:true,
        newUser
    })
  } catch (error) {
    console.log("Register error ");
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

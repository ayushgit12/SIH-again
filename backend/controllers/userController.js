import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middleware/authMidlleware.js";


export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      email,
      password: hashedPassword,
    });
    await user.save();

    // const token = await new Token({
    //   userId: user._id,
    //   token: crypto.randomBytes(32).toString("hex"),
    // }).save();
    // console.log(`token while registering is : ${token}`);
    // const url = `${process.env.BASE_URL}/users/${user.id}/verify/${token.token}`;
    // await sendEmail(user.email, "Verify Email", url);

    res.status(201).json({
      userId: user._id,

      mssg: "An Email sent to your account please verify",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(`email is : ${email}`);
  console.log(`password is : ${password}`);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user._id);

    return res.json({
      _id: user._id,

      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

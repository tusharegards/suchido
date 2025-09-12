import User from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendEmail } from "../libs/send-email.js"
import Verification from "../models/verification.js"


const registerUser = async (req, res) => {
  try{
    const {email, name, password} = req.body
    const existing_user = await User.findOne({email})
    if(existing_user){
        res.status(400).json({
            message: "Email Address already in use"
        })
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt) 
    const newUser = await User.create({
        email,
        name,
        password: hashPassword
    })
      
    // TODO Send Email
    const verificationToken = jwt.sign(
      {userId : newUser._id, property: "email-verification"}, 
      process.env.JWT_SECRET_KEY,
      {expiresIn: "1h"}
    )

    await Verification.create({
        userId: newUser._id,
        token: verificationToken,
        expiresAt: new Date(Date.now() + 3600000)
    })

    //send email
    const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${verificationToken}`
    const emailBody= "<p>Click the link below to verify your email address</p> <a href="+ verificationLink +">"+ verificationLink + "</a> <p>Thanks</p> "
    const emailSubject = "Please verify your email address"

    await sendEmail(email, emailSubject, emailBody);

    res.status(201).json({
        message: "User Created Successfully, Please check your email to verify your account "+ newUser
    })
  }catch (error) {
    console.log(error);
    return res.status(500).json({message : " Internal Server Error"})
  }
}

const loginUser = async (req, res) => {
  // Login logic here
}

export { registerUser, loginUser };
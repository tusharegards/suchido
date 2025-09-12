import mongoose, { Schema } from "mongoose";
import { trim } from "zod";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // Do not return password field by default
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    profilePicture: {
      type: String,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    is2FAEnabled: {
      type: Boolean,
      default: false,
    },
    twoFAOtp: {
      type: String,
      select: false, // Do not return OTP field by default
    },
    twoFAOtpExpires: {
      type: Date,
      select: false, // Do not return OTP expiry field by default
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

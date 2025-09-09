import {z} from "zod";

export const signInSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
})

export const signUpSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    name: z.string().min(3, "Name must be at least 3 characters long"),
    confirmPassword: z.string().min(1, "Please confirm your password")
}).refine((val) => val.password !== val.confirmPassword, {
    message: "Passwords do not match",
})
import {z} from 'zod';

const registerSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    name: z.string().min(3, "Name must be at least 3 characters long")
});

const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

export { registerSchema, loginSchema };
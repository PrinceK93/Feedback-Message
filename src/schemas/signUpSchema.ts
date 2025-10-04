import {z} from 'zod'

export const usernameValidation = z
              .string()
              .min(2, {message: "Username must be at least 2 characters"})
              .max(20, {message: "Username must be at most 20 characters"})
              .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" })


export const signUpSchema = z.object({
    username : usernameValidation,
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email address" }),
    password: z.string().min(6, {message: "password must be at least 6 characters"}),
})
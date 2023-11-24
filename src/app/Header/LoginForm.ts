import {z} from 'zod'

export const LoginSchema = z.object({
    username: z.string().email("Must be an email."),
    password: z.string().min(1, "Password is required")
})

export type TLoginSchema = z.infer<typeof LoginSchema>;
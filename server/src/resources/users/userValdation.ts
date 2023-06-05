import { z } from 'zod'

export const userRegisterSchema = z.object( {
    username: z.string().min(3,  { message: "Username must be 3 or more characters long." }),
    email: z.coerce.string().email().min(5, { message: "Email Must be 5 or more characters long." }),
    password: z.string().min(5, { message: "Password must be 5 or more characters long." })
})
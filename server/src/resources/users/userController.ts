import { Request, Response } from "express";
import { z } from "zod";
import { UserModel } from "./userModel";
import { userRegisterSchema } from "./userValdation";

export async function registerUser(req: Request, res: Response) {
    const inputData = req.body;
    
    try {
        await validation(userRegisterSchema, inputData);
        const { username, email, password } = inputData;
        const user = new UserModel({ username, email, password });
        await user.save();
        
        res.status(201).send({ message: `User ${username} registered successfully!` });
    } catch (error: any) {
        res.status(400).send({ error: error.message || "Validation error" });
    }
}








export async function validation(schema: z.Schema, input: any) {
    try {
        await schema.parseAsync(input);
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorMessage = error.errors[0]?.message || "Validation error";
            throw new Error(errorMessage);
        } else {
            throw new Error("Validation error");
        }
    }
}
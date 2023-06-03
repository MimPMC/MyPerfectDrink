import { Request, Response } from "express";
import { UserModel } from "./userModel";

export async function registerUser(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
        const user = new UserModel({username, email, password})
        await user.save();
        res.status(201).send({message: `user${username} registered succefully!`})
    } catch(error:any) {
        console.error(error)
        res.status(500).send ("internal server error")
    }
    console.log("hello")
}
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { UserModel } from "./userModel";
import { userRegisterSchema } from "./userValdation";

export async function registerUser(req: Request, res: Response) {
    const inputData = req.body;
    try {
        userRegisterSchema.parse(inputData)
        
    } catch (error) {
        if(error instanceof z.ZodError) {
            const errorMessage = error.errors[0]?.message || "Validation error";
            res.status(400).send({ error: errorMessage });
            return;
        } else  {
            res.status(400).send({error: "Validation error"})
            return;
        }
    }
    try {
        const { username, email, password } = inputData
        const user = new UserModel({username, email, password})
        await user.save();
        res.status(201).send({message: `user${username} registered succefully!`})
    } catch(error:any) {
        console.error(error)
        res.status(500).send ("internal server error")
    }
}


export async function validationMiddleware(schema: z.Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
      const inputData = req.body;
      try {
        schema.parse(inputData);
        next(); // Validation successful, proceed to the next middleware or route handler
      } catch (error) {
        if (error instanceof z.ZodError) {
          const errorMessage = error.errors[0]?.message || "Validation error";
          res.status(400).send({ error: errorMessage });
        } else {
          res.status(400).send({ error: "Validation error" });
        }
      }
    };
  }
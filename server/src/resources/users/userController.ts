import argon2 from "argon2";
import { Request, Response } from "express";
import { z } from "zod";
import { UserModel } from "./userModel";
import { userRegisterSchema } from "./userValdation";

export async function registerUser(req: Request, res: Response) {
  const inputData = req.body;
    //Validates the input with zod and checks for duplicate usernames or emails in the db. 
  try {
    await validation(userRegisterSchema, inputData);

    const { username, email, password } = inputData;
    const existingEmail = await UserModel.findOne({ email: req.body.email });
    const existingUsername = await UserModel.findOne({
      username: req.body.username,
    });

    if (existingEmail || existingUsername) {
      let errorMessage = "";

      if (existingEmail) {
        errorMessage = "Email is already registered";
      }

      if (existingUsername) {
        errorMessage = "Username is already taken";
      }
      return res.status(409).json(errorMessage);
    }
    const hashedPassword = await argon2.hash(password, {
      timeCost: 3,
      memoryCost: 1024,
    });

    
    // Hashar lösenord och skapar ny user från vår schema
    const user = new UserModel({ username, email, password: hashedPassword });
    await user.save();

    res
      .status(201)
      .send({ message: `User ${username} registered successfully!` });
  } catch (error: any) {
    res.status(400).send({ error: error.message});
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

import express from 'express';
import { registerUser} from "./userController";
import { userRegisterSchema } from './userValdation';


export const userRouter = express.Router();

// GET api/users/session


// POST api/users/register
userRouter.post('/register', registerUser);

// POST api/users/login
//userRouter.post('/login', loginUser);

// DELETE api/users/logout
//userRouter.delete('/logout', logoutUser);
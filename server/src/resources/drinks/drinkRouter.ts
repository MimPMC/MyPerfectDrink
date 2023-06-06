import express from 'express';
import { createDrink, getAllDrinks } from './drinkControllers';




export const drinkRouter = express.Router();

// GET api/users/session
drinkRouter.get('/', getAllDrinks);

drinkRouter.post('/', createDrink);



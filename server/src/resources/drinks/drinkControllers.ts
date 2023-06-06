import { Request, Response } from 'express';
import {DrinkModel} from './drinkModel'


export async function getAllDrinks(req: Request, res: Response) {
  try {
    const drinks = await DrinkModel.find({});
    res.status(200).json(drinks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
}

// CREATE PRODUCT
export async function createDrink(req: Request, res: Response) {
  try {
    const drinkData = { ...req.body };
    const drink = new DrinkModel(drinkData);

    await drink.save();
    res.status(201).json(drink);
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
}
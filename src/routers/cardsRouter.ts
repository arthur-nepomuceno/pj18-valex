import { Router } from "express";
import { checkSchema } from "../schemas/checkSchema";
import { cardSchema } from "../schemas/cardSchema";
import { createCard } from "../controllers/cardsController";

export const cardsRouter = Router();

cardsRouter.post('/cards', checkSchema(cardSchema), createCard)
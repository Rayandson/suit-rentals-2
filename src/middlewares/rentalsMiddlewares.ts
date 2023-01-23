import { Request, Response } from "express";
import { Rental } from "../protocols.js";
import { rentalSchema } from "../schemas/rentalSchema.js";

export function rentalSchemaValidate(req: Request, res: Response, next) {
    const rental = req.body as Rental

    const { error } = rentalSchema.validate(rental, {abortEarly: false});

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send({errors})
    }

    next() 
}
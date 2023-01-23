import { Request, Response } from "express";
import { insertOne, findRentalsByCPF, updateRental, deleteRentalById, countRentalsToBeReturned } from "../repositories/rentalsRepository.js";
import { Rental } from "../protocols.js";

async function createRental(req: Request, res: Response) {
    const {renter_name, cpf, quantity} = req.body as Rental

    try {
        await insertOne(renter_name, cpf, quantity)
        res.sendStatus(201)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

async function getRentalsByCPF(req: Request, res: Response) {
    const cpf = req.query.cpf as string;

    try {
        const rentals = await findRentalsByCPF(cpf)
        res.status(200).send(rentals.rows)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

async function returnRental(req: Request, res: Response) {
    const id = req.params.id as string;
    try {
        await updateRental(id);
        res.sendStatus(204)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

async function deleteRental(req: Request, res: Response) {
    const id = req.params.id as string;

    try {
        await deleteRentalById(id)
        res.sendStatus(204)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

async function getCurrentlyRentedQuantity(req: Request, res: Response) {
    try {
        const quantity = await countRentalsToBeReturned();
        res.status(200).send(quantity.rows[0].currently_rented)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

export {
    createRental,
    getRentalsByCPF,
    returnRental,
    deleteRental,
    getCurrentlyRentedQuantity
}
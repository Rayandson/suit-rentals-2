import { Request, Response } from "express";
import { insertOne, findAll, updateRental, deleteRentalById, findRentalsByCPF } from "../repositories/rentalsRepository.js";

async function createRental(req: Request, res: Response) {
    const { renter_id, suits_ids } = req.body

    try {
        await insertOne(renter_id, suits_ids)
        res.sendStatus(201)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message) 
    }
}

async function getAllRentals(req: Request, res: Response) {
    const { cpf } = req.query
    try {
        if(cpf) {
            const result = await findRentalsByCPF(cpf)
            const rentals = result.map(rental => {
                const {id, rental_date, return_date, is_returned, renters, rentals_suits} = rental;
                const rented_suits = rentals_suits.map(suit => {
                    const {suits} = suit
                    return {id: suits.id, color: suits.color, size: suits.sizes.size};
                })
                return {id, rental_date, return_date, is_returned, renter: renters, rented_suits}
            }) 
            res.status(200).send(rentals)
        } else {
            const result = await findAll()
            const rentals = result.map(rental => {
                const {id, rental_date, return_date, is_returned, renters, rentals_suits} = rental;
                const rented_suits = rentals_suits.map(suit => {
                    const {suits} = suit
                    return {id: suits.id, color: suits.color, size: suits.sizes.size};
                })
                return {id, rental_date, return_date, is_returned, renter: renters, rented_suits}
            })
            res.status(200).send(rentals)
        }

    } catch(err) {
        console.log(err)
        res.status(500).send(err)
    }
}

async function returnRental(req: Request, res: Response) {
    const string_id = req.params.id as string;
    const id = Number(string_id)

    try {
        await updateRental(id);
        res.sendStatus(204)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

async function deleteRental(req: Request, res: Response) {
    const string_id = req.params.id as string;
    const id = Number(string_id)

    try {
        await deleteRentalById(id)
        res.sendStatus(204)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}


export {
    createRental,
    getAllRentals,
    returnRental,
    deleteRental,
}
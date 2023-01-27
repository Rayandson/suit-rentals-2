import { Request, Response } from "express";
import { findMany, insertOne } from "../repositories/rentersRepository.js";
import { Renter } from "../protocols.js";


async function createRenter(req: Request, res: Response) {
    const renter = req.body as Renter

    try {
        await insertOne(renter)
        res.sendStatus(201)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

async function getRenters(req: Request, res: Response) {
    try {
        const renters = await findMany()
        res.status(200).send(renters)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}

export {
    createRenter,
    getRenters
}
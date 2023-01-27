import { Request, Response } from "express";
import { insertSuit, insertSize } from "../repositories/suitsRepository.js";
import { Suit, Size } from "../protocols.js";

async function createSuit(req: Request, res: Response) {
    const suit = req.body as Suit;

    try {
        await insertSuit(suit)
        res.sendStatus(201)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}


async function createSize(req: Request, res: Response) {
    const size = req.body as Size

    try {
        await insertSize(size)
        res.sendStatus(201)
    } catch(err) {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}


export {
    createSize,
    createSuit
}
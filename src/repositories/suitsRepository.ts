import prisma from "../db/db.js";
import { Size, Suit } from "../protocols.js";

async function insertSuit(suit: Suit) {
    return prisma.suits.create({
        data: suit
    })
}

async function insertSize(size: Size) {
    return prisma.sizes.create({
        data: size
    })
}

export {
    insertSize,
    insertSuit
}
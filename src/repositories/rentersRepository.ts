import prisma from "../db/db.js";
import { Renter } from "../protocols.js";

async function insertOne(renter: Renter) {
    return prisma.renters.create({
        data: renter,
    })
}

async function findMany() {
    return prisma.renters.findMany()
}

export {
    insertOne,
    findMany
}
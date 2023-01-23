import { connection } from "../db/db.js";
import { QueryResult } from "pg";
import { Rental } from "../protocols.js";

async function insertOne(renter_name: string, cpf: string, quantity: number): Promise<QueryResult> {
    return connection.query("INSERT INTO rentals (renter_name, cpf, quantity) VALUES ($1, $2, $3);", [renter_name, cpf, quantity])
}

async function findRentalsByCPF(cpf: string): Promise<QueryResult<Rental>> {
    return connection.query("SELECT * FROM rentals WHERE cpf = $1;", [cpf])
}

async function updateRental(id: string) {
    return connection.query("UPDATE rentals SET is_returned = true WHERE id = $1;", [id])
}

async function deleteRentalById(id: string) {
    return connection.query("DELETE FROM rentals WHERE id = $1;", [id])
}

async function countRentalsToBeReturned() {
    return connection.query("SELECT SUM(quantity) AS currently_rented FROM rentals WHERE is_returned = false;")
}

export {
    insertOne,
    findRentalsByCPF,
    updateRental,
    deleteRentalById,
    countRentalsToBeReturned
}
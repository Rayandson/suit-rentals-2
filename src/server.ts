import express from "express";
// import { createRental, deleteRental, getCurrentlyRentedQuantity, getRentalsByCPF, returnRental } from "./controllers/rentalsController.js";
import { createRental, getAllRentals, returnRental, deleteRental } from "./controllers/rentalsController.js";
import cors from "cors";
import { rentalSchemaValidate } from "./middlewares/rentalsMiddlewares.js";
import { createRenter, getRenters } from "./controllers/renterController.js";
import { createSize, createSuit } from "./controllers/suitsController.js";

const app = express();
app.use(cors());
app.use(express.json())

app.post("/rentals",  createRental)  
app.post("/renters", createRenter)
app.get("/renters", getRenters)
app.post("/sizes", createSize)
app.post("/suits", createSuit)  
app.get("/rentals", getAllRentals)
// app.get("/rentals", getRentalsByCPF)
app.patch("/rentals/return/:id", returnRental)
app.delete("/rentals/delete/:id", deleteRental)
// app.get("/rentals/currently-rented", getCurrentlyRentedQuantity)

app.listen(4000, () => {
    console.log("running on port 4000")
})
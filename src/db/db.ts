import pg from "pg";

const { Pool } = pg;

export const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "password",
    database: "suit-rentals"
})
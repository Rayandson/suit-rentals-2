import pg from "pg";

const { Pool } = pg;

export const connection = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "99541092",
    database: "suit-rentals"
})
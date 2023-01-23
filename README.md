# suit-rentals-back

## About

Back-end for an application to manage the rents of a company that rents suits.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Create database tables using dump.sql file
5. Configure the database configuration file to connect the postgres database.

## Documentation
POST: /rentals

Body: { "renter_name": "Ray", "cpf": "33333333333", "quantity": 2 }


import { Parser } from "./toTypescript";
console.log("__________________________________________");
console.log("------------------------------------------");
console.log("------------------------------------------");
console.log("__________________________________________");

const parser = new Parser(
  `CREATE TABLE example_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INT,
    salary DECIMAL(10, 2),
    is_active BOOLEAN,
    birthdate DATE,
    registration_time TIMESTAMP
);
`
);
console.log(parser.toTypescript());

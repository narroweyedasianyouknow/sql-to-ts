import * as assert from "assert";
import { Parser } from "../src/toTypescript";
`
CREATE TABLE example_table (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  age INT,
  salary DECIMAL(10, 2),
  is_active BOOLEAN,
  birthdate DATE,
  registration_time TIMESTAMP
);
`
it("should parse simple create table", function () {
  const input = `CREATE TABLE users (
    id  UUID, 
    name VARCHAR(255), 
    email VARCHAR(255) UNIQUE, 
    password VARCHAR(255), 
    created_at TIMESTAMP,
    phone INT,
    is_verified BOOLEAN,
    avatar TEXT,
    links TEXT[],
)`;

  const parser = new Parser(input).toTypescript();
  const response = `export interface Users {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;
    phone: number;
    is_verified: boolean;
    avatar: string;
    links: string[];
}
`;
  assert.strictEqual(parser, response);
});

it("should parse", function () {
  const input = `CREATE TABLE users (
        id  INT, 
        name VARCHAR(255), 
        email VARCHAR(255) UNIQUE, 
        password VARCHAR(255), 
        created_at TIMESTAMP, 
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
        primary KEY (id)
    )`;

  const parser = new Parser(input).toTypescript();
  const response = `export interface Users {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
}
`;
  assert.strictEqual(parser, response);
});

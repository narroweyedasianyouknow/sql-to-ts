// import { Pool } from "pg";
// import * as fs from "fs";
// const pool = new Pool({
//   password: "admin",
//   user: "postgres",
// });
// pool
//   .query(
//     `SELECT n.nspname as "Schema",
//   pg_catalog.format_type(t.oid, NULL) AS "Name",
//   pg_catalog.obj_description(t.oid, 'pg_type') as "Description"
//   FROM pg_catalog.pg_type t
//    LEFT JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace
//   WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' FROM pg_catalog.pg_class c WHERE c.oid = t.typrelid))
//   AND NOT EXISTS(SELECT 1 FROM pg_catalog.pg_type el WHERE el.oid = t.typelem AND el.typarray = t.oid)
//   AND pg_catalog.pg_type_is_visible(t.oid)
//   ORDER BY 1, 2;`
//   )
//   .then((res) => {
//     console.log(res.rows);
//     const filtered = res.rows.filter((row: { Name: string }) => {
//       return row.Name.match(/^(pg_|_)/gm) === null;
//     });
//     fs.writeFileSync("./default.json", JSON.stringify(filtered, null, 4));
//   });


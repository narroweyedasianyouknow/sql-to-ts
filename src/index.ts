import { Parser } from "./toTypescript";
console.log("__________________________________________");
console.log("------------------------------------------");
console.log("------------------------------------------");
console.log("__________________________________________");

//   `CREATE TABLE complex_table (
//     id SERIAL PRIMARY KEY,
//     column_boolean BOOLEAN DEFAULT false,
//     column_box BOX,
//     column_bytea BYTEA,
//     column_character CHARACTER(255),
//     column_varchar VARCHAR(255) UNIQUE,
//     column_cid CIDR,
//     column_circle CIRCLE,
//     column_cstring CSTRING DEFAULT 'default',
//     UNIQUE (column_character, column_cid)
// );`
// `CREATE TABLE complex_table_3 (
//   id SERIAL PRIMARY KEY,
//   column_date DATE DEFAULT CURRENT_DATE,
//   column_daterange DATERANGE,
//   column_decimal DECIMAL(10, 5),
//   column_double DOUBLE PRECISION,
//   column_event_trigger EVENT_TRIGGER,
//   column_fdw_handler FDW_HANDLER,
//   column_gtsvector GTSVECTOR,
//   column_index_am_handler INDEX_AM_HANDLER,
//   column_inet INET DEFAULT '192.168.1.1',
//   column_int2vector INT2VECTOR,
//   column_int4multirange INT4MULTIRANGE,
//   column_int4range INT4RANGE,
//   column_int8multirange INT8MULTIRANGE,
//   column_int8range INT8RANGE,
//   column_integer INTEGER,
//   column_int INT,
//   column_internal INTERNAL,
//   column_interval INTERVAL DEFAULT '1 day',
//   UNIQUE (column_date, column_decimal)
// );`
// `CREATE TABLE complex_table_4 (
//   id SERIAL PRIMARY KEY,
//   column_json JSON,
//   column_jsonb JSONB,
//   column_jsonpath JSONPATH,
//   column_language_handler LANGUAGE_HANDLER,
//   column_line LINE,
//   column_lseg LSEG,
//   column_macaddr MACADDR,
//   column_macaddr8 MACADDR8,
//   column_money MONEY,
//   column_name NAME,
//   column_numeric NUMERIC(10, 5),
//   column_nummultirange NUMMULTIRANGE,
//   column_numrange NUMRANGE,
//   column_oid OID,
//   column_oidvector OIDVECTOR,
//   column_path PATH,
//   column_point POINT,
//   column_polygon POLYGON,
//   UNIQUE (column_json, column_numeric)
// );`
// `CREATE TABLE complex_table_5 (
//   id SERIAL PRIMARY KEY,
//   column_real REAL,
//   column_record RECORD,
//   column_refcursor REFCURSOR,
//   column_regclass REGCLASS,
//   column_regcollation REGCOLLATION,
//   column_regconfig REGCONFIG,
//   column_regdictionary REGDICTIONARY,
//   column_regnamespace REGNAMESPACE,
//   column_regoper REGOPER,
//   column_regoperator REGOPERATOR,
//   column_regproc REGPROC,
//   column_regprocedure REGPROCEDURE,
//   column_regrole REGROLE,
//   column_regtype REGTYPE,
//   column_serial SERIAL,
//   column_smallint SMALLINT,
//   column_table_am_handler TABLE_AM_HANDLER,
//   column_text TEXT,
//   column_tid TID,
//   column_time_with_time_zone TIME WITH TIME ZONE,
//   column_time_without_time_zone TIME WITHOUT TIME ZONE,
//   column_timestamp_with_time_zone TIMESTAMP WITH TIME ZONE,
//   column_timestamp_without_time_zone TIMESTAMP WITHOUT TIME ZONE,
//   column_timestamp TIMESTAMP,
//   column_timestampz TIMESTAMPTZ,
//   column_trigger TRIGGER,
//   column_tsm_handler TSM_HANDLER,
//   column_tsmultirange TSMULTIRANGE,
//   column_tsquery TSQUERY,
//   column_tsrange TSRANGE,
//   column_tstzmultirange TSTZMULTIRANGE,
//   column_tstzrange TSTZRANGE,
//   column_tsvector TSVECTOR,
//   column_txid_snapshot TXID_SNAPSHOT,
//   UNIQUE (column_real, column_serial)
// );`
const parser = new Parser(
  `CREATE TABLE complex_table_5 (
    id SERIAL PRIMARY KEY,
    column_unknown UNKNOWN,
    column_uuid UUID,
    column_void VOID,
    column_xid xid,
    column_xid8 xid8,
    column_xml xml,
  );`
);

console.log(parser.toTypescript());

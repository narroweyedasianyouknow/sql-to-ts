const PostgresDataTypes: Record<string, string> = {
  char: "string",
  aclitem: "string",
  bigint: "number",
  bit: "string",
  "bit varying": "string",
  boolean: "boolean",
  box: "string",
  bytea: "string",
  character: "string",
  "character varying": "string",
  varchar: "string",
  cid: "string",
  cidr: "string",
  circle: "string",
  cstring: "string",
  date: "string",
  datemultirange: "string",
  daterange: "string",
  decimal: "number",
  "double precision": "number",
  event_trigger: "string",
  fdw_handler: "string",
  gtsvector: "string",
  index_am_handler: "string",
  inet: "string",
  int2vector: "string",
  int4multirange: "string",
  int4range: "string",
  int8multirange: "string",
  int8range: "string",
  integer: "number",
  int: "number",
  internal: "string",
  interval: "string",
  json: "string",
  jsonb: "string",
  jsonpath: "string",
  language_handler: "string",
  line: "string",
  lseg: "string",
  macaddr: "string",
  macaddr8: "string",
  money: "string",
  name: "string",
  numeric: "number",
  nummultirange: "number",
  numrange: "number",
  oid: "string",
  oidvector: "string",
  path: "string",
  point: "string",
  polygon: "string",
  real: "number",
  record: "string",
  refcursor: "string",
  regclass: "string",
  regcollation: "string",
  regconfig: "string",
  regdictionary: "string",
  regnamespace: "string",
  regoper: "string",
  regoperator: "string",
  regproc: "string",
  regprocedure: "string",
  regrole: "string",
  regtype: "string",
  serial: "number",
  smallint: "number",
  table_am_handler: "string",
  text: "string",
  tid: "string",
  "time with time zone": "string",
  "time without time zone": "string",
  "timestamp with time zone": "string",
  "timestamp without time zone": "string",
  timestamp: "string",
  timestampz: "string",
  trigger: "string",
  tsm_handler: "string",
  tsmultirange: "string",
  tsquery: "string",
  tsrange: "string",
  tstzmultirange: "string",
  tstzrange: "string",
  tsvector: "string",
  txid_snapshot: "string",
  unknown: "unknown",
  uuid: "string",
  void: "void",
  xid: "string",
  xid8: "string",
  xml: "string",
};
export default PostgresDataTypes;

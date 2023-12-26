export function toCamelCase(str: string) {
  return str
    .replace(/([-_][a-z])/gi, ($1) =>
      $1.toUpperCase().replace("-", "").replace("_", "")
    )
    .replace(/^[A-Z]/, (m) => m.toLocaleLowerCase());
}

export function toPascalCase(str: string) {
  return toSnakeCase(str)
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export function toSnakeCase(str: string) {
  return str
    .replace(/([A-Z])/g, "_$1")
    .replace(/[-\s]+/g, "_")
    .replace(/^_/, "")
    .toLocaleLowerCase();
}

export function toScreamingSnakeCase(str: string) {
  return toSnakeCase(str).toLocaleUpperCase();
}

export function toKebabCase(str: string) {
  return toSnakeCase(str).replace(/_/g, "-");
}

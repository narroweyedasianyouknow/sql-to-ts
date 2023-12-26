import PostgresDataTypes from "./default";
import { toPascalCase } from "./utils/formatter";

export class ASTParser {
  types: {
    Schema: string;
    Name: string;
    Description: string;
  }[] = [];
  constructor(private readonly input: string) {}
  private getTableName() {
    const schema = this.input
      .toLocaleLowerCase()
      .replace(/create\s+table\s+(if not exists)?\s*([a-z]+)/g, "$2")
      .trim()
      .match(/^[a-z]+/g)?.[0];
    return schema;
  }
  parseProperties() {
    const properties: {
      type: string;
      name: string;
    }[] = [];
    const splitted = String(this.input.match(/\([^&]+/g)?.[0])
      .replace("(", "")
      .replace(/(\r\n|\r|\n)/g, "")
      .trim();
    for (const property of splitted.split(",")) {
      const trimmed = property.trim();
      if (trimmed.length <= 0) continue;
      if (!trimmed.match(/^[a-z_]+/gm)) continue;

      const matched = /(^\S+)\s+([^(\s|\,)]*)/gm.exec(trimmed) ?? [];
      const [_, name, not_parsed_type] = matched;
      const serialized = not_parsed_type
        .replace(/(\(.+\))/g, "")
        .replace(/^[a-z_]+\s([^\s]+)/g, "")
        .replace(/[\(\)\;0-9]+/g, "");

      const is_array = serialized.match(/\[\]$/gm);
      const type =
        PostgresDataTypes[
          serialized.replace(/\[\]$/gm, "").toLocaleLowerCase()
        ];
      if (type && name) {
        properties.push({
          name: name,
          type: is_array ? `${type}[]` : type,
        });
      } else {
        console.log(
          `Type ${serialized} not found`,
          name
        );
      }
    }

    return {
      name: toPascalCase(this.getTableName() ?? ""),
      properties,
    };
  }

  parse() {
    const properties = this.parseProperties();

    return properties;
  }
}

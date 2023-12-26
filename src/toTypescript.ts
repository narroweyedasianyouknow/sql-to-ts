import { ASTParser } from "./parser";

export class Parser {
  private astParser: ASTParser;
  constructor(private readonly input: string) {
    this.astParser = new ASTParser(input);
  }

  toTypescript() {
    const { name, properties } = this.astParser.parseProperties() ?? {};
    const types = properties?.map((property) => {
      return `${property.name}: ${property.type};`;
    });
    return `export interface ${name} {
    ${types?.join("\n    ")}
}
`;
  }
}

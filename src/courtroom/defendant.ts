import Lawbook = require("./lawbook");

export class Defendant {
  public laws: Lawbook.Lawbook;

  constructor(private name: string) {
    this.laws = new Lawbook.Lawbook();
  }

  public getName(): string {
    return this.name;
  }
}

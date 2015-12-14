import LawContainer = require("./lawcontainer");

export class Defendant {
  public laws: LawContainer.LawContainer;

  constructor(private name: string) {
    this.laws = new LawContainer.LawContainer();
  }

  public getName(): string {
    return this.name;
  }
}

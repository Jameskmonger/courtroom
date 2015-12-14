import Defendant = require("./defendant");

export class Courtroom {
  private defendants: Array<Defendant.Defendant>;

  constructor() {
    this.defendants = [];
  }

  public trial(name: string) {
    this.defendants.push(new Defendant.Defendant(name));
  }

  public getDefendantCount(): number {
    return this.defendants.length;
  }
}

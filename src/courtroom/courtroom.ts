import Defendant = require("./defendant");

export class Courtroom {
  private defendants: Array<Defendant.Defendant>;

  constructor() {
    this.defendants = [];
  }

  public trial(name: string): Defendant.Defendant {
    var defendant = new Defendant.Defendant(name);

    this.defendants.push(defendant);

    return defendant;
  }

  public getDefendantCount(): number {
    return this.defendants.length;
  }
}

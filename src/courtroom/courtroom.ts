import Trial = require("./trial");

export class Courtroom {
  private defendants: Array<Trial.Trial>;

  constructor() {
    this.defendants = [];
  }

  public trial(name: string) {
    this.defendants.push(new Trial.Trial(name));
  }

  public getDefendantCount(): number {
    return this.defendants.length;
  }
}

import NotJury = require("./juries/notjury");
import Jury = require("./juries/jury");

export class LawContainer {
  private jury: Array<Jury.Jury>;

  constructor() {
    this.jury = [];
  }

  public not(compare: any) {
    this.jury.push(new NotJury.NotJury(compare));
  }

  public count(): number {
    return this.jury.length;
  }
}

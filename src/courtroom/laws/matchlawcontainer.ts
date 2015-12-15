import IsJury = require("../juries/isjury");
import NotJury = require("../juries/notjury");
import Jury = require("../juries/jury");
import LawContainer = require("./lawcontainer");

export class MatchLawContainer implements LawContainer.LawContainer {
  private jury: Array<Jury.Jury>;

  constructor() {
    this.jury = [];
  }

  public not(compare: any) {
    this.jury.push(new NotJury.NotJury(compare));
  }

  public is(compare: any) {
    this.jury.push(new IsJury.IsJury(compare));
  }

  public count(): number {
    return this.jury.length;
  }

  public getJuries(): Array<Jury.Jury> {
    return this.jury;
  }
}

import LawContainer = require("./lawcontainer");
import Jury = require("../juries/jury");

export class StringLawContainer implements LawContainer.LawContainer {
  public count(): number {
    return 0;
  }

  public getJuries(): Array<Jury.Jury> {
    return [];
  }
}

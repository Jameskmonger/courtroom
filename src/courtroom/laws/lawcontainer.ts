import Jury = require("../juries/jury");

export interface LawContainer {
  count(): number;
  getJuries(): Array<Jury.Jury>;
}

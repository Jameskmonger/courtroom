import Jury = require("./juries/jury");
import NotJury = require("./juries/notjury");
import IsJury = require("./juries/isjury");
import StringContainsJury = require("./juries/string.contains.jury");
import StringMaxLengthJury = require("./juries/string.maxLength.jury");

export class Lawbook {
  private juries: Array<Jury.Jury>;

  constructor() {
    this.juries = [];
  }

  public not(compare: any) {
    this.juries.push(new NotJury.NotJury(compare));
  }

  public is(compare: any) {
    this.juries.push(new IsJury.IsJury(compare));
  }

  public contains(requirement: string) {
    this.juries.push(new StringContainsJury.ContainsJury(requirement));
  }

  public maxLength(max: number) {
    this.juries.push(new StringMaxLengthJury.MaxLengthJury(max));
  }

  public getJuryCount(): number {
    return (this.juries.length);
  }

  public getJuries(): Array<Jury.Jury> {
    return this.juries;
  }
}

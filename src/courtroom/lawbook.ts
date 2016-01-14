import Jury = require("./juries/jury");
import NotJury = require("./juries/notjury");
import IsJury = require("./juries/isjury");
import StringContainsJury = require("./juries/string.contains.jury");
import StringMaxLengthJury = require("./juries/string.maxLength.jury");
import StringMinLengthJury = require("./juries/string.minLength.jury");

export class Lawbook {
  private juries: Array<Jury.Jury>;

  constructor() {
    this.juries = [];
  }

  public not(compare: any): Lawbook {
    this.juries.push(new NotJury.NotJury(compare));

    return this;
  }

  public is(compare: any): Lawbook {
    this.juries.push(new IsJury.IsJury(compare));

    return this;
  }

  public contains(requirement: string): Lawbook {
    this.juries.push(new StringContainsJury.ContainsJury(requirement));

    return this;
  }

  public minLength(min: number): Lawbook {
    this.juries.push(new StringMinLengthJury.MinLengthJury(min));

    return this;
  }

  public maxLength(max: number): Lawbook {
    this.juries.push(new StringMaxLengthJury.MaxLengthJury(max));

    return this;
  }

  public getJuryCount(): number {
    return (this.juries.length);
  }

  public getJuries(): Array<Jury.Jury> {
    return this.juries;
  }
}

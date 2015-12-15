import Lawbook = require("./lawbook");

export class Defendant {
  public laws: Lawbook.Lawbook;

  constructor(private name: string) {
    this.laws = new Lawbook.Lawbook();
  }

  public getName(): string {
    return this.name;
  }

  public judge(value: any): Array<string> {
    var issues: Array<string> = [];

    for (var matchJury of this.laws.match.getJuries()) {
      var complies = matchJury.verdict(value);

      if (!complies) {
        issues.push(this.getName() + " does not comply with " + matchJury + " for value " + value);
      }
    }

    return issues;
  }
}

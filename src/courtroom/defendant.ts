import Lawbook = require("./lawbook");

export class Defendant {
  public laws: Lawbook.Lawbook;

  constructor(private name: string) {
    this.laws = new Lawbook.Lawbook();
  }

  public getName(): string {
    return this.name;
  }

  public judge(value: any): Array<any> {
    var issues: Array<any> = [];

    for (var matchJury of this.laws.match.getJuries()) {
      var complies = matchJury.verdict(value);

      if (!complies) {
        var issue = {
          property: this.getName(),
          jury: matchJury.getName(),
          value: value
        };

        issues.push(issue);
      }
    }

    return issues;
  }
}

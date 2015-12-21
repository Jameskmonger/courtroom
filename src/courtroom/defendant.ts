import Lawbook = require("./lawbook");

export class Defendant {
  public laws: Lawbook.Lawbook;
  private children: Array<string>;

  constructor(private name: string) {
    this.laws = new Lawbook.Lawbook();
    this.children = [];
  }

  public getName(): string {
    return this.name;
  }

  public trial(name: string) {
    this.children.push(name);
  }

  public getChildCount() {
    return this.children.length;
  }

  public judge(value: any): Array<any> {
    var issues: Array<any> = [];

    for (var jury of this.laws.getJuries()) {
      var complies = jury.verdict(value);

      if (!complies) {
        var issue = {
          property: this.getName(),
          jury: jury.getName(),
          value: value,
          details: jury.getDetails()
        };

        issues.push(issue);
      }
    }

    return issues;
  }
}

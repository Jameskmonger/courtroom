import Lawbook = require("./lawbook");

export class Defendant {
  public laws: Lawbook.Lawbook;
  private children: Array<Defendant>;

  constructor(private name: string) {
    this.laws = new Lawbook.Lawbook();
    this.children = [];
  }

  public getName(): string {
    return this.name;
  }

  public trial(name: string): Defendant {
    var defendant = new Defendant(name);

    this.children.push(defendant);

    return defendant;
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

    for (var child of this.children) {
      issues = issues.concat(child.judge(value[child.getName()]));
    }

    return issues;
  }
}

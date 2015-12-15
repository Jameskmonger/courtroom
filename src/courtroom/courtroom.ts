import Defendant = require("./defendant");

export class Courtroom {
  private defendants: Array<Defendant.Defendant>;

  constructor() {
    this.defendants = [];
  }

  public trial(name: string): Defendant.Defendant {
    var defendant = new Defendant.Defendant(name);

    this.defendants.push(defendant);

    return defendant;
  }

  public getDefendantCount(): number {
    return this.defendants.length;
  }

  public judge(object: any): Array<any> {
    var issues: Array<any> = [];

    for (var property in object) {
      var defendant = this.defendants.filter(f => f.getName() === property)[0];

      if (defendant !== undefined) {
        Array.prototype.push.apply(issues, defendant.judge(object[property]));
      }
    }

    return issues;
  }
}

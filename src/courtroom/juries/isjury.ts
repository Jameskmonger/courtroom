import Jury = require("./jury");

export class IsJury implements Jury.Jury {
  constructor(private compare: any) { }

  verdict(defendant: any): boolean {
    return (defendant === this.compare);
  }

  public getName(): string {
    return "match.is";
  }

  public getDetails(): any {
    return {
      expected: this.compare
    }
  }
}

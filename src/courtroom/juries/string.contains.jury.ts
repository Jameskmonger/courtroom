import Jury = require("./jury");

export class ContainsJury implements Jury.Jury {
  constructor(private contain: any) { }

  verdict(defendant: any): boolean {
    return (defendant.indexOf(this.contain) !== -1);
  }

  public getName(): string {
    return "string.contains";
  }

  public getDetails(): any {
    return {
      required: this.contain
    }
  }
}

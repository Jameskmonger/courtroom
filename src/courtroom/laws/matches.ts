import Law = require("./law");

export class MatchesLaw implements Law.Law {
  constructor(private matches: any) { }

  verdict(defendant: any): boolean {
    return this.matches.test(defendant);
  }

  public getName(): string {
    return "matches";
  }

  public getDetails(): any {
    return {
      required: this.matches
    }
  }
}

import Law = require("./law");

export class IsLaw implements Law.Law {
  constructor(private compare: any) { }

  verdict(defendant: any): boolean {
    return (defendant === this.compare);
  }

  public getName(): string {
    return "is";
  }

  public getDetails(): any {
    return {
      required: this.compare
    }
  }
}

import Law = require("./law");

export class NotLaw implements Law.Law {
  constructor(private compare: any) { }

  verdict(defendant: any): boolean {
    return (defendant !== this.compare);
  }

  public getName(): string {
    return "not";
  }

  public getDetails(): any {
    return {
      prohibited: this.compare
    }
  }
}

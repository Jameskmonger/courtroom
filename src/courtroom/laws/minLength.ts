import Law = require("./law");

export class MinLengthLaw implements Law.Law {
  constructor(private min: number) { }

  verdict(defendant: any): boolean {
    return (defendant.length >= this.min);
  }

  public getName(): string {
    return "minLength";
  }

  public getDetails(): any {
    return {
      minimum: this.min
    }
  }
}

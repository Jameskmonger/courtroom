import Law = require("./law");

export class MaxLengthLaw implements Law.Law {
  constructor(private max: number) { }

  verdict(defendant: any): boolean {
    return (defendant.length <= this.max);
  }

  public getName(): string {
    return "maxLength";
  }

  public getDetails(): any {
    return {
      maximum: this.max
    }
  }
}

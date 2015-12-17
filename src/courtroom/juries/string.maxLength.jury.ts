import Jury = require("./jury");

export class MaxLengthJury implements Jury.Jury {
  constructor(private max: number) { }

  verdict(defendant: any): boolean {
    return (defendant.length <= this.max);
  }

  public getName(): string {
    return "string.maxLength";
  }

  public getDetails(): any {
    return {
      maximum: this.max
    }
  }
}

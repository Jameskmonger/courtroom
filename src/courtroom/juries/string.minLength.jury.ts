import Jury = require("./jury");

export class MinLengthJury implements Jury.Jury {
  constructor(private min: number) { }

  verdict(defendant: any): boolean {
    return (defendant.length >= this.min);
  }

  public getName(): string {
    return "string.minLength";
  }

  public getDetails(): any {
    return {
      minimum: this.min
    }
  }
}

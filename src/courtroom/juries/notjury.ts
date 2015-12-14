import Jury = require("./jury");

export class NotJury implements Jury.Jury {
  constructor(private compare: any) { }

  verdict(defendant: any): boolean {
    return (defendant !== this.compare);
  }
}

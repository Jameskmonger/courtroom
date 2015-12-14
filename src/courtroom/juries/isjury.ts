import Jury = require("./jury");

export class IsJury implements Jury.Jury {
  constructor(private compare: any) { }

  verdict(defendant: any): boolean {
    return (defendant === this.compare);
  }
}

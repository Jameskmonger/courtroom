export class Defendant {
  private laws: Array<any>;

  constructor(private name: string) {
    this.laws = [];
  }

  public getName(): string {
    return this.name;
  }

  public getLaws(): Array<any> {
    return this.laws;
  }
}

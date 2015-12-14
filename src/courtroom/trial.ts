export class Trial {
  private accusations: Array<any>;

  constructor(private name: string) {
    this.accusations = [];
  }

  public getName(): string {
    return this.name;
  }

  public getAccusations(): Array<any> {
    return this.accusations;
  }
}

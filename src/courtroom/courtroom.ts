export class Courtroom {
  public defendantCount: number;
  private defendants: Array<any>;

  constructor() {
    this.defendantCount = 0;
    this.defendants = [];
  }

  public trial(name: string) {
    this.defendants.push(name);
  }
}

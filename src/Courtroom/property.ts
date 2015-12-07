export class Property {
  private num: number;

  constructor(public name: string) {

  }

  setNum(num: number) {
    this.num = num;
  }

  getNum(): number {
    return this.num;
  }
}

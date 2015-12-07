import { Property } from "./property";

export class Courtroom {
  private properties: Array<Property>;

  constructor() {
    this.properties = [];
  }

  hasProperties(): boolean {
    return false;
  }

  firstping(): number {
    return this.properties[0].getNum();
  }

  trial(name: string) {
    var p = new Property(name);

    this.properties.push(p);

    return p;
  }
}

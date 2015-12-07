import { Property } from "./property";

export class Courtroom {
  private properties: Array<Property>;

  constructor() {
    this.properties = [];
  }

  hasProperties(): boolean {
    return false;
  }

  trial(name: string) {
    this.properties.push(new Property(name));
  }
}

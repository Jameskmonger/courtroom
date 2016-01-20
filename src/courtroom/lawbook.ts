import Law = require("./laws/law");
import NotLaw = require("./laws/notlaw");
import IsLaw = require("./laws/islaw");
import StringContainsLaw = require("./laws/string.contains.law");
import StringMaxLengthLaw = require("./laws/string.maxLength.law");
import StringMinLengthLaw = require("./laws/string.minLength.law");

export class Lawbook {
  private laws: Array<Law.Law>;

  constructor() {
    this.laws = [];
  }

  public not(compare: any): Lawbook {
    this.laws.push(new NotLaw.NotLaw(compare));

    return this;
  }

  public is(compare: any): Lawbook {
    this.laws.push(new IsLaw.IsLaw(compare));

    return this;
  }

  public contains(requirement: string): Lawbook {
    this.laws.push(new StringContainsLaw.ContainsLaw(requirement));

    return this;
  }

  public minLength(min: number): Lawbook {
    this.laws.push(new StringMinLengthLaw.MinLengthLaw(min));

    return this;
  }

  public maxLength(max: number): Lawbook {
    this.laws.push(new StringMaxLengthLaw.MaxLengthLaw(max));

    return this;
  }

  public getLawCount(): number {
    return (this.laws.length);
  }

  public getLaws(): Array<Law.Law> {
    return this.laws;
  }
}

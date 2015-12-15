import MatchLawContainer = require("./laws/matchlawcontainer");
import StringLawContainer = require("./laws/stringlawcontainer");

export class Lawbook {
  public match: MatchLawContainer.MatchLawContainer;
  public string: StringLawContainer.StringLawContainer;

  constructor() {
    this.match = new MatchLawContainer.MatchLawContainer();
    this.string = new StringLawContainer.StringLawContainer();
  }

  public count(): number {
    return (this.match.count() + this.string.count());
  }
}

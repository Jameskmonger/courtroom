import MatchLawContainer = require("./laws/matchlawcontainer");

export class Lawbook {
  public match: MatchLawContainer.MatchLawContainer;

  constructor() {
    this.match = new MatchLawContainer.MatchLawContainer();
  }

  public count(): number {
    return (this.match.count());
  }
}

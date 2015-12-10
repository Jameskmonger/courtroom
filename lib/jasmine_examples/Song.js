define([], function() {
  "use strict";

  function Song() {

  }

  Song.prototype = {
    constructor: Song,

    persistFavoriteStatus: function(value) {
      throw new Error("not yet implemented");
    }
  };

  return Song;
});

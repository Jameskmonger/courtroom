define([], function() {
  "use strict";

  function Player() {

  }

  Player.prototype = {
    constructor: Player,

    play: function(song) {
      this.currentlyPlayingSong = song;
      this.isPlaying = true;
    },

    pause: function() {
      this.isPlaying = false;
    },

    resume: function() {
      if (this.isPlaying) {
        throw new Error("song is already playing");
      }

      this.isPlaying = true;
    },

    makeFavorite: function() {
      this.currentlyPlayingSong.persistFavoriteStatus(true);
    },


  };

  return Player;
});

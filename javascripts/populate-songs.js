define(["jquery"],function($) {
  return {
    popSongs: function(callback) {
      $.ajax({
        url: "https://blazing-heat-5390.firebaseio.com/songs.json"
      }).done(function(data) {
        callback.call(this, data);
      });
    }
  };
});
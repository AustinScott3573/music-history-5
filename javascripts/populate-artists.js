define(["jquery"],function($) {
  return {
    popArtists: function(callback) {
      $.ajax({
        url: "https://blazing-heat-5390.firebaseio.com/.json"
      }).done(function(data) {
        callback.call(this, data);
      });
    }
  };
});
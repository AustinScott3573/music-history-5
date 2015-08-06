define(function(){
  return {
    getSongs: function(sentFunc, sentDom) {
      $.ajax({
        url: "https://blazing-heat-5390.firebaseio.com/.json"
      }).done(function(data) {
        sentFunc(data, sentDom);
      });
    }
  };
});
define(["jquery"]),(function($){
  return {
    getSongs: function(sentFunc, sentDom) {
      $.ajax({
        url: "./javascripts/newsongss.json"
      }).done(function(data) {
        sentFunc(data, sentDom);
      });
    }
  };
});
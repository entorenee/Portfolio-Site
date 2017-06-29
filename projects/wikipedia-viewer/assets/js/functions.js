$(document).ready(function() {
  $("#submit").on("click", function(e) {
    var query = $("#query").val();
    if (query.length > 0) {
      e.preventDefault();
      wikiSearch(query);
    }
  }); //End onClick function

  function wikiSearch(query) {
    $("#wiki-viewer").empty();
    var apiCall = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=" + query;
    $.getJSON( apiCall)
      .done(function( data ) {
        for(var i = 0; i < data.query.search.length; i++) {
          var urlRequest = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&titles=" + data.query.search[i].title
       + "&exintro=1";
          $.getJSON(urlRequest, function (dataExcerpt) {
            var tempKey;
            var title;
            var extract;
            var url;
            tempKey = Object.keys(dataExcerpt.query.pages);
            title = dataExcerpt.query.pages[tempKey].title;
            extract = dataExcerpt.query.pages[tempKey].extract;
            url = "https://en.wikipedia.org/wiki/" + title.replace(/\s/gi, "_")
            $("#wiki-viewer").append("<a href=" + url + " class='div-link' target='_blank'><div class='wiki-article'><h2>" + title + "</h2><p>" + extract + "</div></a>");
          });
        } //End for loop
      })  //End done parameter
      .fail(function(info) {
          console.error( info );
    });

  } //wikiSearch function end
});

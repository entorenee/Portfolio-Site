var quoteJSON;

//This function generates a random number based on the number of quotes stored in quoteJSON.
function randomNumber() {
  var randomNum = 0;
  randomNum = Math.floor(Math.random() * quoteJSON.keys().length);
  return randomNum;
}

//This function results in a quote array with [0] being the quote and [1] being the attribution.
function randomQuote (randomNum) {
  var quote = [];
  quote.push(quoteJSON[randomNum].quote);
  quote.push(quoteJSON[randomNum].attribution);
  $("#quote").text(quote[0]);
  $("#attribution").text(quote[1]);
  return quote;
}

//This function ensures that the quote and attribution are at or under 140 characters.
function tweetTruncate (quote) {
  var tweet = "";
  if (quote[0].length + quote[1].length > 140) {
    tweet = quote[0].slice(0, 135 - quote[1].length) + "...\" " + quote[1];
  } else {
    tweet = quote[0] + " " + quote[1];
  }
  $("#tweet").attr("href", "http://twitter.com/home?status=" + tweet);
}

//This function invokes all other functions to update quote, attribution, and tweet link for refresh.
function masterUpdate () {
  $.getJSON("assets/js/quotes.json", function(data) {
    console.log(data);
    quoteJSON = data;
    var randomNum = 0;
    var quote = [];
    randomNum = randomNumber();
    quote = randomQuote(randomNum);
    tweetTruncate(quote);
  });
}

//jQuery for on click button actions
$(document).ready(function() {
  masterUpdate();
  $("#newQuote").on("click", masterUpdate());

});

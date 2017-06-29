var quoteJSON;

$(document).ready(function() {
  populateObject();
});

/* This function populates the quoteJSON variable with the contents of the quotes.json file.
 * Once the variable is populated it initializes the masterUpdate function and allows the user
 * to get a new quote by clicking the "Get new Quote" button. */
function populateObject() {
  let populationPromise = new Promise(function(resolve, reject) {
    $.get("assets/js/quotes.json", function(data) {
      quoteJSON = data;
      if (Object.keys(data).length == Object.keys(quoteJSON).length) {
        resolve();
      }
    });
  });
  populationPromise.then(function() {
    masterUpdate();
    $("#newQuote").on("click", masterUpdate);
  });
}

//This function generates a random number based on the number of quotes stored in quoteJSON.
function randomNumber() {
  var randomNum = 0;
  randomNum = Math.floor(Math.random() * Object.keys(quoteJSON).length);
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
  var randomNum = 0;
  var quote = [];
  randomNum = randomNumber();
  quote = randomQuote(randomNum);
  tweetTruncate(quote);
}

var quoteArr = [];
quoteArr = [
    {
      "quote": "\"One option is no option. Two options is a dilemma. Three options is a choice.\"",
      "attribution": "Anthony Robbins"
    },
    {
      "quote": "\"And though each habit means relatively little on its own, over time, the meals we order, what we say to our kids each night, whether we save or spend, how often we exercise, and the way we organize our thoughts and work routines have enormous impacts on our health, productivity, financial security, and happiness.\"",
      "attribution": "Charles Duhigg"
    },
    {
      "quote": "\"Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure… than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.\"",
      "attribution": "Theodore Roosevelt"
    },
    {
      "quote": "\"Just when the caterpillar thought the world was over, it became a butterfly.\"",
      "attribution": "Proverb"
    },
    {
      "quote": "\"Don’t say to yourself that you’re going to make the greatest wall ever made. Set one brick at a time as perfectly as you can. Do that every day, and soon you will have a wall.\"",
      "attribution": "Will Smith"
    },
    {
      "quote": "\"We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths.\"",
      "attribution": "Walt Disney"
    },
    {
      "quote": "\"Sometimes the questions are complicated and the answers are simple.\"",
      "attribution": "Dr Seuss"
    },
    {
      "quote": "\"Everything has beauty, but not everyone sees it.\"",
      "attribution": "Confucius"
    },
    {
      "quote": "\"The opposite of courage in our society is not cowardice, it is conformity.\"",
      "attribution": "Rollo May"
    },
    {
      "quote": "\"Our lives begin to end the day we become silent about things that matter.\"",
      "attribution": "Martin Luther King, Jr."
    },
    {
      "quote": "\"Courage is the power to let go of the familiar.\"",
      "attribution": "Raymond Lindquist"
    },
    {
      "quote": "\"The cave you fear to enter holds the treasure you seek.\"",
      "attribution": "Joseph Campbell"
    },
    {
      "quote": "\"Life shrinks or expands in proportion to one's courage.\"",
      "attribution": "Anais Nin"
    },
    {
      "quote": "\"A friend is someone who knows all about you and loves you just the same.\"",
      "attribution": "Elbert Hubbard"
    },
    {
      "quote": "\"Never let your sense of morals get in the way of doing what's right.\"",
      "attribution": "Isaac Asimov"
    },
    {
      "quote": "\"Forgiveness does not change the past, but it does enlarge the future.\"",
      "attribution": "Paul Boese"
    }
  ]

//This function generates a random number based on the number of quotes stored in quoteArr.
function randomNumber() {
  var randomNum = 0;
  randomNum = Math.floor(Math.random() * quoteArr.length);
  return randomNum;
}

//This function results in a quote array with [0] being the quote and [1] being the attribution.
function randomQuote (randomNum) {
  var quote = [];
  quote.push(quoteArr[randomNum].quote);
  quote.push(quoteArr[randomNum].attribution);
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

//jQuery for on click button actions
$(document).ready(function() {
  masterUpdate();
  $("#newQuote").on("click", masterUpdate);

});

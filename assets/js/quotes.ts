// Random quote
const writeRandomQuote = function () {
  let quotes = new Array();
  quotes[0] = "Tact is the knack of making a point without making an enemy.";
  quotes[1] = "Curiosity is the lust of the mind.";
  quotes[2] =
    "I have always thought the actions of men the best interpreters of their thoughts.";
  quotes[3] =
    "A bore is someone who deprives you of solitude without providing you with company.";
  quotes[4] = "Never trust a computer you can't throw out the window.";
  quotes[5] =
    "The real problem is not whether machines think but whether men do.";
  quotes[6] = "The whole is more than the sum of its parts.";
  quotes[7] = "The universe is change; our life is what our thoughts make it.";
  quotes[8] =
    "All men dream, but not equally. Those who dream by night in the dusty recesses of their minds, wake in the day to find that it was vanity: but dreamers of the day are dangerous men, for they may act on their dreams with open eyes, to make them possible.";
  quotes[9] =
    "Ordinary men live among marvels and feel no wonder, grow familiar with objects and learn nothing new about them.";
  quotes[10] =
    "There is no real ending. It's just the place where you stop the story.";
  quotes[11] = "The crisis of today is the joke of tomorrow.";
  quotes[12] =
    "No one cares how much you know, until they know how much you care";
  quotes[13] =
    "Age is an issue of mind over matter. If you don't mind, it doesn't matter.";
  quotes[14] =
    "Education is not the filling of a pail, but rather the lighting of a fire.";
  quotes[15] = "The art of reading is to skip judiciously.";
  quotes[16] =
    "New knowledge is the most valuable commodity on earth. The more truth we have to work with, the richer we become.";
  quotes[17] = "You can observe a lot by just watching.";
  quotes[18] = "Be as you wish to seem.";
  quotes[19] = "Never confuse a single defeat with a final defeat";
  quotes[20] = "Difficulty is the excuse history never accepts.";
  quotes[21] =
    "History never looks like history when you are living through it.";
  quotes[22] =
    "The past is a foreign country; they do things differently there.";

  let authors = new Array();
  authors[0] = "Issac Newton";
  authors[1] = "Thomas Hobbes";
  authors[2] = "John Locke";
  authors[3] = "Oscar Wilde";
  authors[4] = "Steve Wozniak";
  authors[5] = "B.F. Skinner";
  authors[6] = "Aristotle";
  authors[7] = "Marcus Aurelius";
  authors[8] = "T.E. Lawrence";
  authors[9] = "George Henry Lewes";
  authors[10] = "Frank Herbert";
  authors[11] = "H.G. Wells";
  authors[12] = "Theodore Roosevelt";
  authors[13] = "Mark Twain";
  authors[14] = "W.B. Yeats";
  authors[15] = "Alexander Hamilton";
  authors[16] = "Kurt Vonnegut";
  authors[17] = "Yogi Berra";
  authors[18] = "Socrates";
  authors[19] = "F. Scott Fitzgerald";
  authors[20] = "Edward R. Murrow";
  authors[21] = "John W. Gardner";
  authors[22] = "L.P. Hartley";

  let rand_quote = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text")!.innerHTML = quotes[rand_quote];
  document.getElementById("quote-author")!.innerHTML = authors[rand_quote];
  document
    .getElementById("quote-text")!
    .setAttribute(
      "title",
      "'" + quotes[rand_quote] + "'" + " " + "-" + " " + authors[rand_quote]
    );
};

const quote_rotation = function () {
  // Repeats for up to 1000 times.
  let callCount = 1;
  let repeater = setInterval(function () {
    if (callCount < 1000) {
      writeRandomQuote();
      callCount += 1;
    } else {
      clearInterval(repeater);
    }
  }, 5000);
};

// Quotes
writeRandomQuote();
quote_rotation();

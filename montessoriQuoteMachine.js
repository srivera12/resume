// clicking the button
const quoteButton = document.querySelector(".new-quote-button");
quoteButton.addEventListener("click", newQuote);

// quotes array
const montessoriQuotes = [
    {quote:'"Education must begin at birth."', book:"The 1946 London Lectures", topic:""},
    {quote:'“The child who concentrates is immensely happy.”', book:'The Absorbent Mind', topic:''},
    {quote:'“At some given moment it happens that the child becomes deeply interested in a piece of work; we see it in the expression on his face, his intense concentration, the devotion to the exercise.”', book:'The Discovery of the Child', topic:''},
    {quote:'“The hand is the instrument of intelligence. The child needs to manipulate objects and to gain experience by touching and handling. ”', book:'The 1946 London Lectures', topic:''},
    {quote:'“The satisfaction which they find in their work has given them a grace and ease like that which comes from music.”', book:'The Discovery of the Child', topic:''},
    {quote:'“A child who has become master of his acts through long and repeated exercises, and who has been encouraged by the pleasant and interesting activities in which he has been engaged, is a child filled with health and joy and remarkable for his calmness and discipline.”', book:'The Discovery of the Child', topic:''},
];

// getting quote
function newQuote() {
 const randomQuote = montessoriQuotes[Math.floor(Math.random() * montessoriQuotes.length)]
  const randomQuoteText = randomQuote.quote;
  const randomQuoteSource = randomQuote.book;
  const randomQuoteTopic = randomQuote.topic;
 displayQuote(randomQuoteText);
 displayQuoteSource(randomQuoteSource);
 displayQuoteTopic(randomQuoteTopic);
}

// displaying quote, source, and topic
function displayQuote(quote) {
  const quoteText = document.querySelector(".quote-text");
  quoteText.textContent = quote;
}
function displayQuoteSource(source) {
  const quoteText = document.querySelector(".quote-source");
  quoteText.textContent = `- ${source}`;
}
function displayQuoteTopic(topic) {
  const quoteText = document.querySelector(".quote-topic");
  quoteText.textContent = `Topics: ${topic}`;
}

// pre-populate quote on load
newQuote();

// search quote by topic
// function quotesByTopic() {

// }

// finding elements
const quoteButton = document.querySelector('#new-quote-button');
const quoteText = document.querySelector('.quote-text');
const quoteSource = document.querySelector('.quote-source');
const sourceSelect = document.getElementById('source-select');
const topicSelect = document.getElementById('topic-select');
const sourceButton = document.getElementById('quote-source-button');
const topicButton = document.getElementById('quote-topic-button');
const quotesBySource = document.getElementById('quotes-by-source');
const quotesByTopic = document.getElementById('quotes-by-topic');

// clicking the button
quoteButton.addEventListener('click', newQuote);

// quotes array
// add quote template:      {quote:'', book:'', topic:['']},
const montessoriQuotes = [
  { quote: '"Education must begin at birth."', book: 'The 1946 London Lectures', topic: ['The Child', 'learning'] },
  {
    quote: '“The child who concentrates is immensely happy.”',
    book: 'The Absorbent Mind',
    topic: ['joy', 'The Child', 'learning'],
  },
  {
    quote:
      '“At some given moment it happens that the child becomes deeply interested in a piece of work; we see it in the expression on his face, his intense concentration, the devotion to the exercise.”',
    book: 'The Discovery of the Child',
    topic: ['concentration', 'The Child', 'learning'],
  },
  {
    quote:
      '“The hand is the instrument of intelligence. The child needs to manipulate objects and to gain experience by touching and handling. ”',
    book: 'The 1946 London Lectures',
    topic: ['The Child', 'learning'],
  },
  {
    quote:
      '“The satisfaction which they find in their work has given them a grace and ease like that which comes from music.”',
    book: 'The Discovery of the Child',
    topic: ['independence', 'joy', 'The Child', 'learning'],
  },
  {
    quote:
      '“A child who has become master of his acts through long and repeated exercises, and who has been encouraged by the pleasant and interesting activities in which he has been engaged, is a child filled with health and joy and remarkable for his calmness and discipline.”',
    book: 'The Discovery of the Child',
    topic: ['joy', 'discipline', 'The Child', 'learning'],
  },
  {
    quote:
      '“Praise, help, or even a look, may be enough to interrupt him, or destroy the activity….  The great principle which brings success to the teacher is this: as soon as concentration has begun, act as if the child does not exist.”',
    book: 'The Absorbent Mind',
    topic: ['concentration', 'praise', 'The Child', 'learning'],
  },
  {
    quote:
      '“As we observe children, we see the vitality of their spirit, the maximum effort put forth in all they do, the intuition, attention and focus they bring to all life’s events, and the sheer joy they experience in living.”',
    book: 'The Child, Society and the World (Unpublished Speeches and Writing)',
    topic: ['joy', 'concentration', 'The Child', 'learning'],
  },
  {
    quote:
      '“The child who has never learned to work by himself, to set goals for his own acts, or to be the master of his own force of will is recognizable in the adult who lets others guide his will and feels a constant need for approval of others.”',
    book: 'Education and Peace',
    topic: ['independence', 'peace', 'The Child', 'learning'],
  },
  {
    quote: '“… in every child is the seed that will mature into an adult.”',
    book: 'The Theosophist',
    topic: ['The Child', 'learning'],
  },
  {
    quote:
      '“In the child is much knowledge, much wisdom. If we do not profit from it, it is only because of neglect on our part to become humble and to see the wonder of this soul and learn what the child can teach.”',
    book: 'The Theosophist',
    topic: ['The Child', 'learning'],
  },
  {
    quote:
      '“The child looks for his independence first, not because he does not desire to be dependent on the adult. But because he has in himself some fire, some urge, to do certain things and not other things.”',
    book: 'The Theosophist',
    topic: ['independence', 'The Child', 'learning'],
  },
  {
    quote: '“It is necessary that the child teach himself, and then the success is great.”',
    book: 'The Theosophist',
    topic: ['independence', 'The Child', 'learning'],
  },
  {
    quote: '“Children acquire knowledge through experience in the environment.”',
    book: 'The 1946 London Lectures',
    topic: ['classroom environment', 'The Child', 'learning'],
  },
  {
    quote:
      '“Children are endowed with a power that enables them to reconstruct things which are very complex, and they do so with a great deal of pleasure.”',
    book: 'The 1946 London Lectures',
    topic: ['joy', 'independence', 'The Child', 'learning'],
  },
  {
    quote: '“Adults move because their will directs them. The small child is urged by nature.”',
    book: 'The 1946 London Lectures',
    topic: ['nature', 'The Child', 'learning'],
  },
  {
    quote:
      '“… the child’s individual liberty must be so guided that through his activity he may arrive at independence … the child who does not do, does not know how to do.”',
    book: 'The Montessori Method',
    topic: ['independence', 'The Child', 'learning'],
  },
  {
    quote:
      '“The teacher has two tasks: to lead the children to concentration and to help them in their development afterwards.”',
    book: 'The Child, Society and the World (Unpublished Speeches and Writing)',
    topic: ['concentration', 'The Teacher'],
  },
  {
    quote:
      '“The teacher’s task is not to talk, but to prepare and arrange a series of motives for cultural activity in a special environment made for the child.”',
    book: 'The Absorbent Mind',
    topic: ['classroom environment', 'The Teacher'],
  },
  {
    quote:
      '“The instructions of the teacher consist then merely in a hint, a touch—enough to give a start to the child. The rest develops of itself.”',
    book: 'Dr. Montessori’s Own Handbook',
    topic: ['independence', 'The Teacher'],
  },
  {
    quote:
      '“Here is an essential principal of education: to teach details is to bring confusion; to establish the relationship between things is to bring knowledge.”',
    book: 'From Childhood to Adolescence',
    topic: ['The Teacher'],
  },
  {
    quote:
      '“The teacher, when she begins work in our schools, must have a kind of faith that the child will reveal himself through work.”',
    book: 'The Absorbent Mind',
    topic: ['The Teacher'],
  },
  {
    quote:
      '“An ordinary teacher cannot be transformed into a Montessori teacher, but must be created anew, having rid herself of pedagogical prejudices.”',
    book: 'Education for a New World',
    topic: ['The Teacher'],
  },
  {
    quote:
      '“She [the Montessori teacher] must acquire a moral alertness which has not hitherto been demanded by any other system, and this is revealed in her tranquility, patience, charity, and humility. Not words, but virtues, are her main qualifications.”',
    book: 'The Discovery of the Child',
    topic: ['peace', 'The Teacher'],
  },
  {
    quote:
      '“The fundamental help in development, especially with little children of 3 years of age, is not to interfere. Interference stops activity and stops concentration.”',
    book: 'The Child, Society and the World (Unpublished Speeches and Writing)',
    topic: ['development', 'concentration', 'The Teacher'],
  },
  {
    quote:
      '“To let the child do as he likes when he has not yet developed any powers of control, is to betray the idea of freedom ... . Real freedom, instead, is a consequence of development; it is the development of latent guides, aided by education.”',
    book: 'The Absorbent Mind',
    topic: ['development', 'discipline'],
  },
  {
    quote:
      '“Discipline is born when the child concentrates his attention on some object that attracts him and which provides him not only with a useful exercise but with a control of error. Thanks to these exercises … the child becomes calm, radiantly happy, busy, forgetful of himself and, in consequence, indifferent to prizes or material rewards.”',
    book: 'The Absorbent Mind',
    topic: ['discipline'],
  },
  {
    quote:
      ' “… the task of the educator lies in seeing that the child does not confound good with immobility, and evil with activity, as often happens in old-time discipline.”',
    book: 'The Montessori Method',
    topic: ['discipline'],
  },
  {
    quote:
      '“A room in which all the children move about usefully, intelligently, and voluntarily, without committing any rough or rude act, would seem to me a classroom very well disciplined indeed.”',
    book: 'The Montessori Method',
    topic: ['classroom environment', 'discipline'],
  },
  {
    quote: '“The child is both a hope and a promise for mankind.”',
    book: 'Education and Peace',
    topic: ['peace', 'social change'],
  },
  {
    quote:
      '“We shall walk together on this path of life, for all things are part of the universe and are connected with each other to form one whole unity.”',
    book: 'To Educate the Human Potential',
    topic: ['social change'],
  },
  {
    quote: '“Education is the best weapon for peace.”',
    book: 'Education and Peace',
    topic: ['peace', 'social change'],
  },
  {
    quote:
      '“True peace … suggests the triumph of justice and love among men; it reveals the existence of a better world where harmony reigns.',
    book: 'Peace and Education',
    topic: ['peace', 'social change'],
  },
  {
    quote:
      '“An education capable of saving humanity is no small undertaking: it involves the spiritual development of man, the enhancement of his value as an individual, and the preparation of young people to understand the times in which they live.”',
    book: 'Education and Peace',
    topic: ['social change'],
  },
  {
    quote:
      '“If we are among the men of good will who yearn for peace, we must lay the foundation for peace ourselves, by working for the social world of the child.”',
    book: 'International Montessori Congress, 1937',
    topic: ['social change'],
  },
  {
    quote:
      '“The only true freedom for an individual is to have the opportunity to act independently … there is no such thing as an individual until a person can act by himself.”',
    book: 'Education and Peace',
    topic: ['independence', 'social change'],
  },
  {
    quote: '“Preventing conflicts is the work of politics; establishing peace is the work of education.”',
    book: 'Education and Peace',
    topic: ['peace', 'social change'],
  },
  {
    quote:
      '“This is the hope we have—a hope in a new humanity that will come from this new education, an education that is collaboration of man and the universe…”',
    book: 'The Theosophist',
    topic: ['social change'],
  },
];

// getting quote
function newQuote() {
  const randomQuote = montessoriQuotes[Math.floor(Math.random() * montessoriQuotes.length)];
  const randomQuoteText = randomQuote.quote;
  const randomQuoteSource = randomQuote.book;
  displayQuote(randomQuoteText);
  displayQuoteSource(randomQuoteSource);
}

// displaying quote and source
function displayQuote(quote) {
  quoteText.textContent = quote;
}
function displayQuoteSource(source) {
  quoteSource.textContent = `- ${source}`;
}

// pre-populate quote on load
newQuote();

// // creating quote select by source
function createSourceSelect() {
  const bookList = [];
  for (let i = 0; i < montessoriQuotes.length; i++) {
    if (!bookList.includes(montessoriQuotes[i].book)) {
      bookList.push(montessoriQuotes[i].book);
    }
  }
  for (let i = 0; i < bookList.length; i++) {
    let sourceOption = document.createElement('option');
    sourceOption.textContent = bookList[i];
    sourceOption.setAttribute('value', bookList[i]);
    sourceSelect.appendChild(sourceOption);
  }
}
createSourceSelect();

// // select by quote source
function getQuotesSource() {
  quotesBySource.textContent = "";
  const value = sourceSelect.value;
  for (let i = 0; i < montessoriQuotes.length; i++) {
    if (montessoriQuotes[i].book === value) {
      let quote = document.createElement('blockquote');
      quote.textContent = montessoriQuotes[i].quote;
      quote.classList.add('quote-text');
      quotesBySource.appendChild(quote);
    }
  }
}
sourceButton.addEventListener('click', getQuotesSource);

// // search quote by topic
// function createTopicSelect() {
//   for (let i = 0; i < montessoriQuotes.length; i++) {
//     let topicOption = document.createElement("option");
//     topicOption.textContent = montessoriQuotes[i].topic;
//     topicSelect.appendChild(topicOption);
//   }
// }
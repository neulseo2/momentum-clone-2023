const quotes = [
  {
    quote: "Let all that you do be done in love",
    book: "1 Corinthian 16:14"
  },
  {
    quote: "And above all these put on love, which binds everything together in perfect harmony",
    book: "Colossians 3:14"
  },
  {
    quote: "Greater love has no one than this, that someone lay down his life for his friends",
    book: "John 15:13"
  },
  {
    quote: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life",
    book: "John 3:16"
  },
  {
    quote: "Above all, keep loving one another earnestly, since love covers a multitude of sins    ",
    book: "1 Peter 4:8"
  },
  {
    quote: "We love because he first loved us",
    book: "1 John 4:19"
  },
  {
    quote: "But you, O Lord, are a God merciful and gracious, slow to anger and abounding in steadfast love and faithfulness",
    book: "Psalms 86:15"
  },
  {
    quote: "God shows his love for us in that while we were still sinners, Christ died for us",
    book: "Romans 5:8"
  },
  {
    quote: "Love must be sincere. Hate what is evil; cling to what is good. Be devoted to one another in love. Honor one another above yourselves",
    book: "Romans 12:9-10"
  },
  {
    quote: "And now these three remain: faith, hope and love. But the greatest of these is love",
    book: "1 Corinthian 13:13"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.book;

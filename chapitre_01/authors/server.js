const express = require('express');
const app = express();
const port = 8000;

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/', (req, res) => {
    res.send('Authors API');
  });
app.get('/authors/:id/', (req, res) => {
  const id = req.params.id;
  res.send(`authors${[id].name}, his ${[id].nationality}`);
  });

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
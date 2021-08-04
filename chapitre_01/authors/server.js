//exo1
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

  //exo2

app.get("/authors/:id/", (req, res) => {
    const id = req.params.id;
    res.send(`${authors[id - 1].name}, ${authors[id - 1].nationality}`);
  });

  //exo3

  app.get("/authors/:id/books/", (req, res) => {
    const id = req.params.id;
    res.send(`${authors[id - 1].books}`);
  });

//exo4

  app.get("/json/authors/:id/", (req, res) => {
    const id = req.params.id;
    res.send(`${authors[id - 1].name}, ${authors[id - 1].nationality}`);
  });
  app.get("/json/authors/:id/books/", (req, res) => {
    const id = req.params.id;
    res.send(`${authors[id - 1].books}`);
  });

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
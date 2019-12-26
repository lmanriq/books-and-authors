var Book = require('./book.js');

class Author {
  constructor(author) {
    this.first = author.first;
    this.last = author.last;
    this.books = [];
  }

  write(title, publicationYear) {
    var book = new Book(this.first, this.last, title, publicationYear);
    this.books.push(book);
    return book;
  }
}

module.exports = Author;

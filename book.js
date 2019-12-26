class Book {
  constructor(firstName, lastName, title, publicationYear) {
    this.title = title;
    this.publicationYear = publicationYear;
    this.author = `${firstName} ${lastName}`;
  }
}

module.exports = Book;

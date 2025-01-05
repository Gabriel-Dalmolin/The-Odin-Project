function Book(title, author, pages, alreadyRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.alreadyRead = alreadyRead;
    this.info = function() {
        console.log(`${this.title} created by ${this.author}, has ${this.pages} pages, ${alreadyRead ? "already read" : "not read yet"}`);
    }
}

book = new Book("Harry potter and the philosopher stone", "J. K. Rowling", 223, false)
book.info()

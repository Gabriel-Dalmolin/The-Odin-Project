const inputFormWindow = document.querySelector("#input-form");
const books = document.querySelector("#books");
const options = document.querySelector("#options");
const message = document.querySelector("#message");
const nameInput = document.querySelector("#name-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const nameEditInput = document.querySelector("#name-edit-input");
const authorEditInput = document.querySelector("#author-edit-input");
const pagesEditInput = document.querySelector("#pages-edit-input");
const editForm = document.querySelector("#edit-form");
const booksReadLabel = document.querySelector("#booksRead")
const overlay = document.querySelector("#overlay")

let bookName, author, pages;

let booksList = [];
let book_counter = 0;
let booksRead = 0;


class Book {
    constructor(title, author, pages, bookId){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.bookId = bookId;
    }
}

function open_form(){
    inputFormWindow.style.display = "block";
    books.classList.add("books-darkened");
    options.classList.add("input-darkened");
    overlay.style.zIndex = "9";
    inputFormWindow.style.zIndex = "10";
    
    inputFormWindow.classList.add("show")

    inputFormWindow.addEventListener("mouseout");
}

function close_form(){
    inputFormWindow.style.display = "none";
    books.classList.remove("books-darkened");
    options.classList.remove("input-darkened");
    overlay.style.zIndex = "-1";
    inputFormWindow.style.zIndex = "-1";
}

function create_new_book(bookName = nameInput.value, author = authorInput.value, pages = pagesInput.value){
    bookName = bookName;
    author = author;
    pages = pages;

    if (!bookName){
        message.textContent = "The book's name field should not be empty"
        return;
    } else if (!author){
        message.textContent = "The author field should not be empty"
        return;
    } else if (!pages){
        message.textContent = "The pages field should not be empty"
        return;
    }

    const bookId = book_counter;
    book_counter++; 
    

    const book = new Book(bookName, author, pages, bookId)
    booksList.push(book)
    
    const bookHtml = document.createElement("button");
    bookHtml.classList.add("book");
    bookHtml.dataset.bookId = bookId;

    bookHtml.onclick = () => edit_book(bookHtml);
    
    const bookNameHtml = document.createElement("h1");
    const authorHtml = document.createElement("h2");
    const pagesHtml = document.createElement("h3");

    const alreadyReadCheckbox = document.createElement("input")
    alreadyReadCheckbox.type = "checkbox";
    alreadyReadCheckbox.addEventListener("change", function(){
        if (this.checked){
            booksRead++;
        } else {
            booksRead--;
        }
        booksReadLabel.textContent = booksRead;
    })

    const alreadyReadLabel = document.createElement("h3")
    alreadyReadLabel.textContent = "Already read: "
    const alreadyReadDiv = document.createElement("div")
    alreadyReadDiv.style.display = "flex";
    alreadyReadDiv.appendChild(alreadyReadLabel);
    alreadyReadDiv.appendChild(alreadyReadCheckbox);

    alreadyReadCheckbox.addEventListener('mouseover', () => {
        bookHtml.disabled = true; 
    });
    
    alreadyReadCheckbox.addEventListener('mouseout', () => {
        bookHtml.disabled = false;
    });

    const divider = document.createElement("hr");
    divider.classList.add("divider")

    bookNameHtml.textContent = bookName;
    authorHtml.textContent = "Created by: " + author;
    pagesHtml.textContent = "Has " + pages + " pages";

    bookHtml.appendChild(bookNameHtml);
    bookHtml.appendChild(divider);
    bookHtml.appendChild(authorHtml);
    bookHtml.appendChild(pagesHtml);
    bookHtml.appendChild(alreadyReadDiv)

    books.insertBefore(bookHtml, books.firstChild);
}

function edit_book(button){
    books.classList.add("books-darkened")
    options.classList.add("input-darkened")

    editForm.style.display = "block";
    const bookId = button.dataset.bookId;
    const book = booksList.find((b) => b.bookId == bookId);

    nameEditInput.value = book.title;
    authorEditInput.value = book.author;
    pagesEditInput.value = book.pages;

    editForm.dataset.bookId = bookId;

    overlay.style.zIndex = "9";
    editForm.style.zIndex = "10";
}

function close_edit_form(){
    editForm.style.display = "none";
    books.classList.remove("books-darkened")
    options.classList.remove("input-darkened")
    overlay.style.zIndex = "-1";
    editForm.style.zIndex = "-1";
}

function delete_book(){
    const bookId = editForm.dataset.bookId;
    const bookIndex = booksList.findIndex((book) => book.bookId == bookId);

    if (bookIndex !== -1) {
        const bookHtml = books.querySelector(`[data-book-id="${bookId}"]`);
        if (bookHtml) {
            books.removeChild(bookHtml);
        }

        booksList.splice(bookIndex, 1);
    }

    close_edit_form();
}

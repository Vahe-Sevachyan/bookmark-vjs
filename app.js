const createBtn = document.querySelector("#createBtn");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#closeBtn");
const submitBtn = document.querySelector(".submit-button");
let readOrNotValue = read.value;
let books = [];

function CreateBook(title, pages, author, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addNewBook() {}

createBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const pages = document.querySelector("#pages").value;
  const author = document.querySelector("#author").value;
  const read = document.querySelector("#read").checked;
  const newBook = new CreateBook(title, pages, author, read);
  books.push(newBook);
  modal.style.display = "none";
  displayBooks();
});

const bookContainer = document.querySelector("#book-container"); // Make sure this div exists in your HTML

function displayBooks() {
  bookContainer.innerHTML = "";
  books.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    // Create and set elements for book info
    const titleHeader = document.createElement("h2");
    titleHeader.innerHTML = `Title: ${book.title}`;

    const authorParagraph = document.createElement("p");
    authorParagraph.innerHTML = `Author: ${book.author}`;

    const pagesParagraph = document.createElement("p");
    pagesParagraph.innerHTML = `Pages: ${book.pages}`;

    const readStatusParagraph = document.createElement("p");
    readStatusParagraph.innerHTML = `Read: ${book.read ? "Yes" : "No"}`;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");

    // Attach an event listener to the delete button
    deleteButton.addEventListener("click", () => {
      books.splice(index, 1); // Remove book from array
      displayBooks(); // Refresh book display
    });

    // Append book info and delete button to the book div
    bookDiv.appendChild(titleHeader);
    bookDiv.appendChild(authorParagraph);
    bookDiv.appendChild(pagesParagraph);
    bookDiv.appendChild(readStatusParagraph);
    bookDiv.appendChild(deleteButton);

    // Append book div to the container
    bookContainer.appendChild(bookDiv);
  });
}

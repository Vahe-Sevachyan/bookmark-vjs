const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const author = document.querySelector("#author");
const read = document.querySelector("#read");
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
  const titleValue = title.value;
  const pagesValue = pages.value;
  const authorsValue = author.value;
  const readValue = read.value;

  const newBook = new CreateBook(
    titleValue,
    pagesValue,
    authorsValue,
    readValue
  );
  books.push(newBook);
  console.log(books);
});

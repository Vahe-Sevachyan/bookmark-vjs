const title = document.querySelector("#title");
const pages = document.querySelector("#pages");
const author = document.querySelector("#author");
const read = document.querySelector("#read");
const createBtn = document.querySelector("#createBtn");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#closeBtn");
let readOrNotValue = read.value;
let books = [];

function createBook(title, author, pages, read) {
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

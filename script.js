let myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
  
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " +
        readStatus + "."
    }
}
 Book.prototype.addBookToLibrary = function(book){
    myLibrary.push(book)
 }

const theWayOfKings = new Book("The Way of Kings", "Brandon Sanderson",
    "1007", "already read")

const wordsOfRadiance = new Book("Words of Radiance", "Brandon Sanderson",
    "1087", "already read")

const libraryContainer = document.querySelector('.library-container')

let bookTitle = document.createElement('p')
let bookAuthor = document.createElement('p')
let bookPages = document.createElement('p')
let bookReadStatus = document.createElement('p')

bookTitle.className = "book-title"
bookAuthor.className = "author"
bookPages.className = "page-count"
bookReadStatus.className = "read-status"

theWayOfKings.addBookToLibrary(theWayOfKings)
wordsOfRadiance.addBookToLibrary(wordsOfRadiance)

console.log(theWayOfKings.info())
console.log(wordsOfRadiance.info())
console.log(myLibrary)

// for (let i = 0; i < myLibrary.length; i++){
//     console.log(myLibrary[i].title)
//     console.log(myLibrary[i].author)
//     console.log(myLibrary[i].pages)
//     console.log(myLibrary[i].readStatus)    
// }


for (let i = 0; i < myLibrary.length(); i++){
    let newBook = document.createElement('div')
    newBook.className = "new-book"
    

    libraryContainer.appendChild(newBook)
}


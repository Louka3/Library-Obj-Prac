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

let libraryContainer = document.querySelector('.library-container')

theWayOfKings.addBookToLibrary(theWayOfKings)
wordsOfRadiance.addBookToLibrary(wordsOfRadiance)

console.log(theWayOfKings.info())
console.log(wordsOfRadiance.info())
console.log(myLibrary)


for (let i = 0; i < myLibrary.length; i++){
    let newBook = document.createElement('div') //create elements
    let bookTitle = document.createElement('p')
    let bookAuthor = document.createElement('p')
    let bookPages = document.createElement('p')
    let bookReadStatus = document.createElement('p')

    newBook.className = "new-book" //give elements their class names
    bookTitle.className = "book-title"
    bookAuthor.className = "author"
    bookPages.className = "page-count"
    bookReadStatus.className = "read-status"
    
    bookTitle.textContent = myLibrary[i].title //add the object attributes to the elements
    bookAuthor.textContent = myLibrary[i].author
    bookPages.textContent = myLibrary[i].pages
    bookReadStatus.textContent = myLibrary[i].readStatus
    
    let newButton = document.createElement('button') //the read-status button
    newButton.className = "read-status-button"
    newButton.innerText = "Read Status"
    
    newBook.append(bookTitle, bookAuthor, bookPages, bookReadStatus, newButton) //put it all together and add to library
    libraryContainer.appendChild(newBook)
}

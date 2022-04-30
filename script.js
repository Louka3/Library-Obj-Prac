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
 Book.prototype.addBookToLibrary = function(){
    myLibrary.push(this)
}


let theWayOfKings = new Book("The Way of Kings", "Brandon Sanderson",
    "1007", "already read")

let wordsOfRadiance = new Book("Words of Radiance", "Brandon Sanderson",
    "1087", "already read")

let oathbringer = new Book("Oathbringer", "Brandon Sanderson", "1220", "not read yet")

let libraryContainer = document.querySelector('.library-container')

theWayOfKings.addBookToLibrary()
wordsOfRadiance.addBookToLibrary()
oathbringer.addBookToLibrary()

console.log(theWayOfKings.info())
console.log(wordsOfRadiance.info())
console.log(myLibrary)

function createNewBook(){
    let newTitle = input("What is the title of the book?")
    let newAuthor = input("Who is the author of the book?")
    let newPageCount = input("How many pages are in the book?")
    let newReadStatus = input("Have you already read this book?('already read' or 'have not read yet')")
    let addedBook = new Book(newTitle, newAuthor, newPageCount, newReadStatus)
    addedBook.addBookToLibrary()
}

function bookToLibraryLoop(bookToAdd){
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
    
    bookTitle.textContent = bookToAdd.title //add the object attributes to the elements
    bookAuthor.textContent = bookToAdd.author
    bookPages.textContent = bookToAdd.pages
    bookReadStatus.textContent = bookToAdd.readStatus
    
    let newButton = document.createElement('button') //the read-status button
    newButton.className = "read-status-button"
    newButton.innerText = "Read Status"
    
    newBook.append(bookTitle, bookAuthor, bookPages, bookReadStatus, newButton) //put it all together and add to library
    libraryContainer.appendChild(newBook)
}

for (let i = 0; i < myLibrary.length; i++){
    bookToLibraryLoop(myLibrary[i])
}

// for (let i = 0; i < myLibrary.length; i++){
//     let newBook = document.createElement('div') //create elements
//     let bookTitle = document.createElement('p')
//     let bookAuthor = document.createElement('p')
//     let bookPages = document.createElement('p')
//     let bookReadStatus = document.createElement('p')

//     newBook.className = "new-book" //give elements their class names
//     bookTitle.className = "book-title"
//     bookAuthor.className = "author"
//     bookPages.className = "page-count"
//     bookReadStatus.className = "read-status"
    
//     bookTitle.textContent = myLibrary[i].title //add the object attributes to the elements
//     bookAuthor.textContent = myLibrary[i].author
//     bookPages.textContent = myLibrary[i].pages
//     bookReadStatus.textContent = myLibrary[i].readStatus
    
//     let newButton = document.createElement('button') //the read-status button
//     newButton.className = "read-status-button"
//     newButton.innerText = "Read Status"
    
//     newBook.append(bookTitle, bookAuthor, bookPages, bookReadStatus, newButton) //put it all together and add to library
//     libraryContainer.appendChild(newBook)
// }

let addBookButton = document.querySelector('.add-book-button')
addBookButton.addEventListener('click',createNewBook)

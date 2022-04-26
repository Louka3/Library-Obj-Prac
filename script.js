let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " +
        read + "."
    }
}
 Book.prototype.addBookToLibrary = function(book){
    myLibrary.push(book)
 }


const theWayOfKings = new Book("The Way of Kings", "Brandon Sanderson",
    "1007", "already read")

const wordsOfRadiance = new Book("Words of Radiance", "Brandon Sanderson",
    "1087", "already read")

theWayOfKings.addBookToLibrary(theWayOfKings)
wordsOfRadiance.addBookToLibrary(wordsOfRadiance)

console.log(theWayOfKings.info())
console.log(wordsOfRadiance.info())
console.log(myLibrary)




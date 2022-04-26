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
const theWayOfKings = new Book("The Way of Kings", "Brandon Sanderson",
    "1007", "already read")

console.log(theWayOfKings.info())
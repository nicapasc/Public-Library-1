const getTotalBooksCount = (books) => books.length;

function getTotalAccountsCount(accounts) {
  //return number of accounts
  return accounts.length
}

function getBooksBorrowedCount(books) {
//books not yet returned
const borrowed = books.filter((book) => book.borrows[0].returned===false);
const resborrowed = borrowed.length;
//return not log
return resborrowed;
}

function getMostCommonGenres(books) {
  //holders
  const bookGenres = books.map((book) => book.genre);
  const temp = [];
  //map over book genres
  bookGenres.map((genre) => {
    //for each genre, first check to see if genre already exists in array
    const genreLocation = temp.findIndex((element) => element.name === genre);
    //second, if it exists, increase count by 1
    if (genreLocation >= 0) {
      temp[genreLocation].count = temp[genreLocation].count + 1;
      //else, if it don't exist, push a new genre object onto array with count of 1
    } else {
      temp.push({ name: genre, count: 1 });
    }
  });
  temp.sort((a, b) => b.count - a.count);
  if (temp.length > 5) {
    return temp.slice(0, 5);
  }
  return temp;
}

function getMostPopularBooks(books) {
  //holder
  let result = [];
  //loop
  books.forEach(book => {
    //name and count attributes
    result.push({"name": book.title,
                "count": book.borrows.length});
  });
  //return limit to 5
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}


const getMostPopularAuthors = (books, authors) => {
  //holder
  let result = [];
  //filter and match
  let bookWithNMatchAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
  //loop through all the results
  bookWithNMatchAuthor.forEach((book) => {
    //variable
    let author = authors.find((author) => author.id === book.authorId)
    //put them together
    result.push({name: `${author.name.first} ${author.name.last}`, count: book.borrows.length})
  });
  //return with 5 results
  return result.sort((a,b)=>(b.count - a.count)).slice(0, 5);
  
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

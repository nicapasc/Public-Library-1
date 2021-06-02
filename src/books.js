function findAuthorById(authors, id) {
//loop through authors data -- no holder needed cos its just one
for (let i = 0; i < authors.length; i++){
//if ids match, return the matching object
if (id === authors[i].id){
  //add to object
  return(authors[i]);
    }
  }
//return 
return {}
}

function findBookById(books, id) {
//loop through books data -- no holder needed cos its just one
for (let i = 0; i < books.length; i++){
//if ids match, return the matching object
if (id === books[i].id){
  //add to object
  return(books[i]);
    }
  }
//return 
return {}
}


function partitionBooksByBorrowedStatus(books) {
  //holder of array
  let result = [];
//books not yet returned
const borrowed = books.filter((book) => book.borrows[0].returned===false);
//books that have been returned
const returned = books.filter((book) => book.borrows[0].returned===true);
//add results to array
result.push(borrowed, returned);
//return not log
return result;
}

function getBorrowersForBook(book, accounts) {
  // `borrows` is a list of transactions, each of type { id: string, returned: true }
  const { borrows } = book;

  const borrowers = borrows.map(({ id, returned })=> {
    // find account that matches the borrower's ID
    const account = accounts.find(account => account.id === id);

    // return the matching account, along with the `returned` info
    return {
      ...account,
      returned,
    };
  });

  return borrowers
    .sort((borrowerA, borrowerB) => {
      const companyA = borrowerA.company;
      const companyB = borrowerB.company;
      return companyA.localeCompare(companyB);
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

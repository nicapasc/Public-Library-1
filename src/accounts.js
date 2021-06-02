function findAccountById(accounts, id) {
//loop through accounts data -- no holder needed cos its just one
for (let i = 0; i < accounts.length; i++){
//if ids match, return the matching object
if (id === accounts[i].id){
  //add to object
  return(accounts[i]);
    }
  }
//return 
return {}
}

function sortAccountsByLastName(accounts) {
return accounts.sort((accountA, accountB) => 
  //access data and sort last names alphabetically
  (accountA.name.last > accountB.name.last ? 1 : -1 ));
}

function getTotalNumberOfBorrows(account, books) {
  //access id inside account
  const { id: accId } = account;
  //takes an array and combines to one
  return books.reduce((accumulator, book) => {
    return (
      //add something to the accuulator each returns
      accumulator +
      book.borrows
      //give me an array of all the borrows of this book by a specific account id
        .filter(borrow => borrow.id === accId)
        //the accumulator's starting value is 0. for each borrow, increment the accumulator by 1
        .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0)
    );
  }, 0);
}


function getBooksPossessedByAccount(account, books, authors) {
  //assign a holder of the array of books taken
    let books_taken = [];
    //each method as a loop
    books.forEach(book=>{
      //this condition is applied to each element in the array
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        //add results to books_taken
        books_taken.push(book);
      }
    })
    console.log(books_taken);
    books_taken.forEach(book=>{
      let anAuthor = authors.find(person => person.id === book.authorId);
      book['author'] = anAuthor;
    })
    console.log(books_taken);
    return books_taken;
  }


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

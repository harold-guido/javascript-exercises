const getTheTitles = function (books) {
  const bookTitles = books.map((book) => {
    return book.title;
  });
  return bookTitles;
};

module.exports = getTheTitles;

const {
  addBooksHandler,
  getAllBooksHandler,
  getDetailBooksHandler,
  editBooksHandler,
  deleteBooksHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBooksHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooksHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksHandler,
  },
];

module.exports = routes;

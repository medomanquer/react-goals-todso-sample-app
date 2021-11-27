import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';
import BooksList from './BooksList';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  onUpdateBookShelf = (book, shelf) => {
    //change incoming book shelf
    book.shelf = shelf;

    BooksAPI.update(book, shelf).then(() => {
      this.setState((oldState) => ({
        books: oldState.books.filter(bookWanted => bookWanted.id !== book.id).concat(book)
      }))
    });
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState(() => ({ books }));
  }
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/search" element={<SearchBooks books={this.state.books} onUpdateBookShelf={this.onUpdateBookShelf} />} />
          <Route path='/' element={<BooksList books={this.state.books} onUpdateBookShelf={this.onUpdateBookShelf} />}></Route>
        </Routes>
      </div>
    )
  }
}

export default BooksApp

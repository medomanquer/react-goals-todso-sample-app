import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf';

function BooksList(props) {
    BooksList.propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }
 
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf bookshelfTitle="Currently Reading"
                        booksToDisplay={props.books.filter(book => book.shelf === "currentlyReading")}
                        onUpdateBookShelf={props.onUpdateBookShelf} />
                    <BookShelf bookshelfTitle="Want to Read"
                        booksToDisplay={props.books.filter(book => book.shelf === "wantToRead")}
                        onUpdateBookShelf={props.onUpdateBookShelf} />
                    <BookShelf bookshelfTitle="Read"
                        booksToDisplay={props.books.filter(book => book.shelf === "read")}
                        onUpdateBookShelf={props.onUpdateBookShelf} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search"><button value="Search"></button></Link>
            </div>
        </div>
    )
}
export default BooksList;

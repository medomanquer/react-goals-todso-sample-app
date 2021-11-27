import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import './App.css'

function BookShelf(props) {
    BookShelf.propTypes = {
        bookshelfTitle: PropTypes.string.isRequired,
        booksToDisplay: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.booksToDisplay && props.booksToDisplay.map((book) =>
                        <li key={book.id}>
                            <Book bookToView={book} onUpdateBookShelf={props.onUpdateBookShelf} />
                        </li>
                    )}
                </ol>
            </div>
        </div>)
}
export default BookShelf;
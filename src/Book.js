import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
    Book.propTypes = {
        bookToView: PropTypes.object.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    }
    const book = props.bookToView;
    const changeBookShelf = props.onUpdateBookShelf;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" id={book.contentVersionl} style={{
                    width: 128, height: 192,
                    backgroundImage: ((book.imageLinks && book.imageLinks.smallThumbnail) ?
                        `url(${book.imageLinks.smallThumbnail})` : 'none')
                }}></div>

                <div className="book-shelf-changer">
                    <select value={book.shelf === '' ? "none" : book.shelf} onChange={(event) => changeBookShelf(book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>

                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.length > 1 ? book.authors.join(', ') : book.authors}</div>
        </div>
    );
}
export default Book;

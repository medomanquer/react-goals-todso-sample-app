import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import './App.css'
class BooksApp extends React.Component {
    state = {

        filteredBooks: []
    }

    getSearchedBooks = (query) => {
        this.setState(() => ({
            filteredBooks: []
        }))

        if (query !== '') {
            BooksAPI.search(query).then((fetchedBooks) => {
                if (fetchedBooks && fetchedBooks.length > 0) {
                    for (let i = 0; i < fetchedBooks.length; i++) {
                        fetchedBooks[i].shelf = 'none';
                        for (let j = 0; j < this.props.books.length; j++)
                            if (fetchedBooks[i].id === this.props.books[j].id) {
                                fetchedBooks[i].shelf = this.props.books[j].shelf;
                            }
                    }
                    this.setState(() => ({
                        filteredBooks: fetchedBooks
                    }))
                }
            });
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search" value="Close"></button></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.getSearchedBooks(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.filteredBooks.length > 0 && this.state.filteredBooks && this.state.filteredBooks.map((book) =>
                            <li key={book.id}>
                                <Book bookToView={book} onUpdateBookShelf={this.props.onUpdateBookShelf} />
                            </li>
                        )}

                        {this.state.filteredBooks.length === 0 && <li>No results to disply</li>}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BooksApp;
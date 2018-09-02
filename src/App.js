import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBook from './SearchBook.js'
import { Route } from 'react-router-dom'

  
  class BooksApp extends React.Component {
    state= {
        books : [],
        searchedBooks : [],
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    updateShelf = (book,shelf) => {
        BooksAPI.update(book,shelf)
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    setSearchBook = () => {
        this.setState({
            searchedBooks: []
        })
    }

    searchShowBooks = (query) => {
        if (!query || (query === '')) {
            this.setState({
            searchedBooks: []
        })}
        else {
        BooksAPI.search(query).then ((searchedBooks) => {
            //Help taken from https://stackoverflow.com/questions/16350604/javascript-how-to-test-if-response-json-array-is-empty
            if(!searchedBooks.length ) {
                this.setState({
                searchedBooks: []
            })
            }
            else {
            this.setState({searchedBooks})
            }
            
            })
        }
    }

    getBookShelf = (book) => {
        let checkBook = this.state.books
        let shelf
        checkBook.forEach ((b) => {
            if (book.id === b.id) {
                shelf = b.shelf
            }
        })
        return shelf 
    }

    render () {

        return (
            <div className='app'>
                <Route exact path='/' render = { () => (
                    <ListBooks 
                        onUpdateShelf = {this.updateShelf}
                        books = {this.state.books}
                    />
                )}/>
                               
                <Route path='/search' render = { () => (
                    <SearchBook   
                        searchShowBooks = {this.searchShowBooks}
                        searchedBooks = {this.state.searchedBooks}
                        onUpdateShelf = {this.updateShelf}
                        getBookShelf = {this.getBookShelf}
                        setSearchBook = {this.setSearchBook}
                    />
                )}
                />
            </div>
        )
    }
  }

export default BooksApp
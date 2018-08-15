import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'



  

  
  class BooksApp extends React.Component {
    state= {
        books : []
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

    render () {
        return (
            <div>
                <ListBooks 
                    onUpdateShelf = {this.updateShelf}
                    books = {this.state.books}
                />
            </div>
        )
    }
  }

export default BooksApp
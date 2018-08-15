import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBook from './SearchBook.js'



  

  
  class BooksApp extends React.Component {
    state= {
        books : [],
        screen : 'list' //list,search
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
                {this.state.screen === 'list' && (
                <ListBooks 
                    onUpdateShelf = {this.updateShelf}
                    books = {this.state.books}
                    onNavigate = {() => {
                        this.setState({screen: 'search'})
                    }}
                />
                )}
                {this.state.screen === 'search' && (
                <SearchBook/>
                )}
            </div>
        )
    }
  }

export default BooksApp
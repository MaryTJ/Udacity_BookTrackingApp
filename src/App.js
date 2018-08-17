import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBook from './SearchBook.js'
import { Route } from 'react-router-dom'

  
  class BooksApp extends React.Component {
    state= {
        books : [],
        searchedBooks : []
        //screen : 'list' //list,search
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

    searchShowBooks = (query) => {

        if (!query || (query === '')) {
            this.setState({
            searchedbooks: []
        })}

        else {
        BooksAPI.search(query).then ((searchedBooks) => {
            //https://stackoverflow.com/questions/16350604/javascript-how-to-test-if-response-json-array-is-empty
            if(!searchedBooks.length ) {
                this.setState({
                searchedbooks: []
            })
            }
            else {
                this.setState({searchedBooks})
            }
            
        })
        
        }
        
        
    }

    render () {

        return (
            <div className='app'>
                <Route exact path='/' render = { () => (
                    <ListBooks 
                        onUpdateShelf = {this.updateShelf}
                        books = {this.state.books}
                        /*onNavigate = {() => {
                            this.setState({screen: 'search'})
                        }}*/
                    />
                )}/>
                
                {/*<Route path='/search' component = {SearchBook}/>*/}
                <Route path='/search' render = { () => (
                    <SearchBook   
                        searchShowBooks = {this.searchShowBooks}
                        searchedBooks = {this.state.searchedBooks}
                    />
                )}
                />
            </div>
        )
    }
  }

export default BooksApp
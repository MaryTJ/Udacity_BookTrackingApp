import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'
import SearchBook from './SearchBook.js'
import { Route } from 'react-router-dom'


  
  class BooksApp extends React.Component {
    state= {
        books : []//,
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
                
                <Route path='/search' component = {SearchBook}/>
                
            </div>
        )
    }
  }

export default BooksApp
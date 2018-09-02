import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SearchBook extends Component {
	static propTypes = {
		searchedBooks: PropTypes.array,
		searchShowBooks: PropTypes.func.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query:query })//.trim() })
		if (this.state.query){
			this.props.searchShowBooks(query)
		} 
	}

	render() {

		return(
			<div className="search-books">
            <div className="search-books-bar">
              <div>
				<Link to= '/' className="close-search" onClick = {event=>this.props.setSearchBook()}>Back to main page</Link>
			   </div>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                	type="text" 
                	placeholder="Search by title or author"
					value = {this.state.query}
					onChange = {(event) => this.updateQuery(event.target.value)}               	
                />
              </div>
            </div>
            <div className="search-books-results" >
            <ol className='booksList'>
			{this.props.searchedBooks.map((book)=>

             	<ol className="books-grid" key={book.id}>
              		<li>
                   		<div className="book" key={book.id}>
			                <div className="book-top" key={book.id}>
			                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url(${book.imageLinks.smallThumbnail})` : ''}}></div>
			                    <div className="book-shelf-changer">
			                       	<select className= "select-book" value={this.props.getBookShelf(book)} onClick = {event=>this.props.getBookShelf(book)} onChange={event=>this.props.onUpdateShelf(book,event.target.value)}>
			                            <option value="move" disabled>Move to...</option>
			                            <option value="currentlyReading">Currently Reading</option>
			                            <option value="wantToRead">Want to Read</option>
			                            <option value="read">Read</option>
			                            <option value="none">None</option>
			                        </select>
			                    </div>
			                </div>
			            	<div className="book-title">{book.title}</div>
			            	<div className="book-authors">{book.authors}</div>
			            </div>
			        </li>
				</ol>
              	)}
				</ol>
            	</div>
          </div>
		)
	}
}

export default SearchBook
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'



class ListBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}

	render() {
	
	return (
		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Link
				to='/search'
				className = 'search-contact'
				>	Search Book
			</Link>
		<div className='booksList'>
		<h2 className="bookshelf-title">Read</h2>
			{this.props.books.filter((book) => book.shelf === 'read').map((book)=>
			
			/* Help taken from https://reactjs.org/docs/forms.html*/
			<div className="bookshelf" key={book.id}>
			    <ul className="books-grid">             
						<li>
			             	<div className="book">
			                    <div className="book-top">
			                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`  }}></div>
			                        <div className="book-shelf-changer">
			                        	<select className= "select-book" value= {book.shelf} onChange={event=>this.props.onUpdateShelf(book,event.target.value)}>
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
			        </ul>
			</div>
			)}
		</div>

		<div className='booksList'>
		<h2 className="bookshelf-title">Currently Reading</h2>
			{this.props.books.filter((book) => book.shelf === 'currentlyReading').map((book)=>
			
			<div className="bookshelf" key={book.id}>
					<ul className="books-grid">             
						<li>
			             	<div className="book">
			                    <div className="book-top">
			                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`  }}></div>
			                        <div className="book-shelf-changer">
			                        	<select className= "select-book" value= {book.shelf} onChange={event=>this.props.onUpdateShelf(book,event.target.value)}>
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
			        </ul>
			</div>
			)}
		</div>
		
		<div className='booksList'>
		<h2 className="bookshelf-title">Want To Read</h2>
			{this.props.books.filter((book) => book.shelf === 'wantToRead').map((book)=>
			
			/*https://reactjs.org/docs/forms.html*/
			<div className="bookshelf" key={book.id}>
                    <ul className="books-grid">             
						<li>
			             	<div className="book">
			                    <div className="book-top">
			                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`  }}></div>
			                        <div className="book-shelf-changer">
			                        	<select className= "select-book" value= {book.shelf} onChange={event=>this.props.onUpdateShelf(book,event.target.value)}>
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
			        </ul>
			</div>
			)}
		</div>
		</div>
		)}
}

export default ListBooks
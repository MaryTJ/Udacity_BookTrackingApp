import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
	render() {
	console.log(this.props.books)
	return (
		<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Link
				to='/search'
				className = 'search-contact'
				>	Search Contact
			</Link>
		<ol className='booksList'>
			{this.props.books.map((book)=>
			/*
			<li key={book.id}>
				{book.title}
				{book.authors}
			</li>
			*/
			
			/*https://reactjs.org/docs/forms.html*/
			<div className="bookshelf" key={book.id}>
				
                <h2 className="bookshelf-title">{book.shelf}</h2>
                  <div className="bookshelf-books" >
                    <ol className="books-grid">             
						<li>
			             	<div className="book">
			                    <div className="book-top">
			                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
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
			        </ol>
			      </div>
			</div>
			)}
		</ol>
		</div>
		)}
}

/*
class ListBooks extends Component {
	render () {
		console.log('Props',this.props)
		return (
			<ol className='booksList'>
			{this.props.books.map((book)=>

			<li key={book.id}>
				{book.title}
			</li>	
			)

			}
			</ol>
			)

	}

}
*/
export default ListBooks
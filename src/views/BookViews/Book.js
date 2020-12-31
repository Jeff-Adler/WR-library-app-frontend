import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap'

export default function Book(props) {
    const [displayReferences, setDisplayReferences] = useState(false)
    const [selectedReference, setSelectedReference] = useState()

    let { bookId } = useParams();
    const {books, convertBookToAlt} = props  
    // Finds the book to be shown
    const book = books.find(book => book.id === parseInt(bookId))

    
    const mapAuthors = () => {
        return book.authors.map((author) => {
            return (
                <ListGroupItem key={`author_${author.id}`}>
                    {`${author.first_name} ${author.last_name}`}
                </ListGroupItem>
            )
        })
    }
    
    const mapAlts = () => {
        return book.alts.map((alt) => {
            return (
                <ListGroupItem key={`alt_${alt.id}`} tag={Link} to={`${bookId}/alts/${alt.id}`}>
                    {alt.title}
                </ListGroupItem>
            )
        })
    }
    
    const mapReferences = () => {        
        return books.map((book) => {
            // removes self.book from dropdown
            if (book.id === parseInt(bookId)) {
                return ""
            } else {
                return <option key={`book_${book.id}`} value={`${book.id}`}>{book.title}</option>
            }
        })
    }
    
    const bookConvertHandler = (e) => {
        e.preventDefault()
        if (selectedReference) {
            convertBookToAlt(bookId, selectedReference)
        } else {
            alert("Please select a reference.")
        }
    }

    return (
        <>
            { book ? 
                <>
                    <Link to="/books">Back</Link> <br/><br/>
                    <ListGroup>
                        <ListGroupItem>
                            <strong>{book.title}</strong><br/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Author(s): </strong><br/>
                        </ListGroupItem>
                        {mapAuthors()}
                        <ListGroupItem>
                            <strong>Duplicate(s): </strong><br/>
                        </ListGroupItem>
                        {mapAlts()}
                    </ListGroup><br/><br/>
                    <Button onClick={() => setDisplayReferences(!displayReferences)}>
                        Make duplicate?
                    </Button><br/><br/>
                    {displayReferences
                    ? 
                    <>
                        <select name="cars" id="cars" onChange={e => {setSelectedReference(e.target.value)}}>
                            {mapReferences()}
                        </select><br/><br/>
                        <Button onClick={bookConvertHandler}>
                            Submit
                        </Button>
                    </>
                    : 
                    ""
                    }
                </>
            :
                <h3>Loading</h3>
            }
        </>
    )
}
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap'

export default function Book(props) {
    let { bookId } = useParams();
    const {books} = props  
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
    
    return (
        <>
            { book ? 
                <>
                    <Link to="/books">Back</Link>
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
                    </ListGroup>
                </>
            :
                <h3>Loading</h3>
            }
        </>
    )
}
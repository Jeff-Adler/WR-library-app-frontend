import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap'

export default function Author(props) {
    let { authorId } = useParams();
    const {authors} = props  
    const author = authors.find(author => author.id === parseInt(authorId))

    const mapBooks = () => {
        return author.books.map((book) => {
            return (
                <ListGroupItem key={`book_${book.id}`}>
                    {`${book.title}`}
                </ListGroupItem>
            )
        })
    }
        
    return (
        <>
            { author ? 
                <>
                    <Link to="/authors">Back</Link>
                    <ListGroup>
                        <ListGroupItem>
                            <strong>{`${author.first_name} ${author.last_name}`}</strong><br/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Book(s): </strong><br/>
                        </ListGroupItem>
                        {mapBooks()}
                    </ListGroup>
                </>
            :
                <h3>Loading</h3>
            }
        </>
    )
}
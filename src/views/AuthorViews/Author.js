import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap'

export default function Author(props) {
    let history = useHistory();
    let { authorId } = useParams();
    const {authors} = props  
    const author = authors.find(author => author.id === parseInt(authorId))

    const mapBooks = () => {
        return author.books.map((book) => {
            return (
                <ListGroupItem key={`book_${book.id}`} tag={Link} onClick={() => history.push(`/books/${book.id}`)}>
                    {`${book.title}`}
                </ListGroupItem>
            )
        })
    }
        
    return (
        <>
            { author ? 
                <div className="list-container">
                    {/* <Link to="/authors">Back</Link> */}
                    <ListGroup>
                        <ListGroupItem className="center">
                            <strong>{`${author.first_name} ${author.last_name}`}</strong><br/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Book(s): </strong><br/>
                        </ListGroupItem>
                        {mapBooks()}
                    </ListGroup>
                </div>
            :
                <h3>Loading</h3>
            }
        </>
    )
}
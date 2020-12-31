import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button} from 'reactstrap'

export default function Alt(props) {
    let history = useHistory()
    let { bookId, altId } = useParams();
    const {books} = props  
    const book = books.find(book => book.id === parseInt(bookId))
    const alt = book.alts.find(alt => alt.id === parseInt(altId))
        
    return (
        <>
            { alt ? 
                <>
                    <Button type="button" onClick={() => history.goBack()}>
                    Back
                    </Button>
                    <ListGroup>
                        <ListGroupItem>
                            <strong>{alt.title}</strong><br/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Reference: </strong><br/>
                        </ListGroupItem>
                        <ListGroupItem tag={Link} to={`books/${book.id}`}>
                            {book.title}
                        </ListGroupItem>
                    </ListGroup>
                </>
            :
                <h3>Loading</h3>
            }
        </>
    )
}
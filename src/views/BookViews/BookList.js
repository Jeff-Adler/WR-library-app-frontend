import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function BookList (props) {
    let { path } = useRouteMatch();
    const { books } = props

    const mapBooks = () => {
        return books.map((book) => {
            return (
                <ListGroupItem key={`book_${book.id}`} tag={Link} to={`${path}/${book.id}`}>
                    {book.title}
                </ListGroupItem>
            )
        })
    }

    return (
        <> 
            <Link to="/">Back</Link>
            <ListGroup>
                {mapBooks()}  
            </ListGroup>
        </>
    )
}
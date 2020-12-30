import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function BookList (props) {

    const { books } = props

    let { path } = useRouteMatch();

    const mapBooks = () => {
        return books.map((book) => {
            return (
                <ListGroupItem tag={Link} to={`${path}/${book.id}`}>
                    {book.title}
                </ListGroupItem>
            )
        })
    }

    return (
        <> 
            <ListGroup>
                {mapBooks()}  
            </ListGroup>
        </>
    )
}
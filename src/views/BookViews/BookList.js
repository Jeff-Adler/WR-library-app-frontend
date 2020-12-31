import React from 'react';
import { Link, useRouteMatch, withRouter } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

function BookList (props) {
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
        <div className="list-container"> 
            <ListGroup>
                {mapBooks()}  
            </ListGroup>
        </div>
    )
}

export default withRouter(BookList)
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default function BookList (props) {
    let { path } = useRouteMatch();
    const { books } = props

    const mapBooks = () => {
        return books.map((book) => {
            return (
                <ListGroupItem key={`book_${book.id}`}>
                    <ListGroupItemHeading key={`book_${book.id}_title`} tag={Link} to={`${path}/${book.id}`}>{book.title}</ListGroupItemHeading>
                    <br/><br/>
                    <ListGroupItemText key={`book_${book.id}_duplicates`}>
                    <strong>Duplicates: </strong> {mapAlts(book)}
                    </ListGroupItemText>
                </ListGroupItem>
            )
        })
    }

    const mapAlts = (book) => {
        return book.alts.map((alt) => {
            return (
                <Link key={`alt_${alt.id}`} to={`${path}/${book.id}/alts/${alt.id}`}>
                    <span>
                        {`${alt.title}`}{`\xa0`}{`\xa0`}
                    </span>
                </Link>
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

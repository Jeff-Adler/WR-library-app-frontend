import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText  } from 'reactstrap';

export default function AuthorList (props) {
    let { path } = useRouteMatch();
    const { authors } = props

    const mapAuthors = () => {
        return authors.map((author) => {
            return (
                <ListGroupItem>
                    <ListGroupItemHeading key={`author_${author.id}`} tag={Link} to={`${path}/${author.id}`}>{`${author.first_name} ${author.last_name}`}</ListGroupItemHeading>
                    <br/><br/>
                    <ListGroupItemText>
                    <strong>Books: </strong> {mapBooks(author)}
                    </ListGroupItemText>
                </ListGroupItem>
            )
        })
    }

    const mapBooks = (author) => {
        return author.books.map((book) => {
            return (
                <Link to={`books/${book.id}`}>
                    <span key={`book_${book.id}`}>
                        {`${book.title}`}{`\xa0`}{`\xa0`}
                    </span>
                </Link>
            )
        })
    }

    return (
        <div className="list-container"> 
            <ListGroup>
                {mapAuthors()}  
            </ListGroup>
        </div>
    )
}
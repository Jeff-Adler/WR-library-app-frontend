import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function AuthorList (props) {
    let { path } = useRouteMatch();
    const { authors } = props

    const mapAuthors = () => {
        return authors.map((author) => {
            return (
                <ListGroupItem key={`author_${author.id}`} tag={Link} to={`${path}/${author.id}`}>
                    {`${author.first_name} ${author.last_name}`}
                </ListGroupItem>
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
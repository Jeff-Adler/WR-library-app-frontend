import React, {useState} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText  } from 'reactstrap';

export default function AuthorList (props) {
    let { path } = useRouteMatch();
    const { authors } = props
    const [filter,setFilter] = useState("")


    const mapAuthors = () => {
        return authors.map((author) => {
            const fullName = author.first_name + " " + author.last_name
            if (fullName.toLowerCase().includes(filter.toLowerCase())) {
                return (
                    <ListGroupItem key={`author_${author.id}`}>
                        <ListGroupItemHeading key={`author_${author.id}_name`} tag={Link} to={`${path}/${author.id}`}>{`${fullName}`}</ListGroupItemHeading>
                        <br/><br/>
                        <ListGroupItemText key={`author_${author.id}_books`}>
                        <strong>Books: </strong> {mapBooks(author)}
                        </ListGroupItemText>
                    </ListGroupItem>
                )
            } else {
                return ""
            }
        })
    }

    const mapBooks = (author) => {
        return author.books.map((book) => {
            return (
                <Link key={`book_${book.id}`} to={`books/${book.id}`}>
                    <span >
                        {`${book.title}`}{`\xa0`}{`\xa0`}
                    </span>
                </Link>
            )
        })
    }

    return (
        <div className="list-container"> 
            <input name="authors-filter" className="filter" id="authors-filter" placeholder="Filter Authors" value={filter} onChange={(e) => setFilter(e.target.value)}/>
            <br/><br/>
            <ListGroup>
                {mapAuthors()}  
            </ListGroup>
        </div>
    )
}
import React from 'react';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className = "center">
            <Link to="/books">
                <Button color="secondary">Books </Button>{' '}
            </Link>
            {`\xa0\xa0\xa0\xa0\xa0\xa0\xa0`}
            <Link to="/authors">
                <Button color="secondary">Authors</Button>{' '}
            </Link>
        </div>
    )
}
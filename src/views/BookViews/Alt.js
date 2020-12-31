import React, {useState} from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import {ListGroup, ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

export default function Alt(props) {
    let history = useHistory();
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const toggle = () => setModal(!modal);

    let { bookId, altId } = useParams();
    const {books, convertAltToBook} = props  
    //finds reference of the duplicate
    const book = books.find(book => book.id === parseInt(bookId))
    //finds duplicate to be shown
    const alt = book.alts.find(alt => alt.id === parseInt(altId))

    const altConvertHandler = () => {
        toggle()
        setIsLoading(!isLoading)
        convertAltToBook(altId)
    }
        
    return (
        <>
            { isLoading ? 
                <div className="loading-screen">
                    <h3>Loading</h3>
                </div>
            :
                <div className="list-container">
                    <ListGroup>
                        <ListGroupItem className="center">
                            <strong>{alt.title}</strong><br/>
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Reference: </strong><br/>
                        </ListGroupItem>
                        <ListGroupItem tag={Link} onClick={() => history.push(`/books/${book.id}`)}>
                            {book.title}
                        </ListGroupItem>
                    </ListGroup><br/><br/>
                    <div className="center">
                        <Button onClick={toggle}>
                            Make reference?
                        </Button>
                    </div>
                    <Modal isOpen={modal} toggle={toggle} className="Modal">
                        <ModalHeader toggle={toggle}>Submit Confirmation</ModalHeader>
                        <ModalBody>{`Are you sure you want to label ${alt.title} as a referece?`}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={altConvertHandler}>Continue</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            }
        </>
    )
}
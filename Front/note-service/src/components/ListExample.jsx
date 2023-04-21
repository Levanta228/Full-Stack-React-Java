import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";
import Button from "react-bootstrap/Button";
import {ButtonGroup} from "react-bootstrap";

export const ListExample = (props) => {
    return (
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.text}</div>
                    PostId: {props.id}
                </div>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Like</Button>
                    <Button variant="secondary">Dislike</Button>
                </ButtonGroup>
                <Badge bg="primary" pill>
                    {props.like}
                </Badge>
            </ListGroup.Item>
    );
}
export default ListExample;
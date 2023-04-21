import React from "react";
import axios from "axios";
import ListExample from "../components/ListExample";
import ListGroup from "react-bootstrap/ListGroup";


const baseURL = "http://localhost:8080/notes/fetch";
export const FetchAllNotes = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
    if (!post) return null;

    return (
        <div>
            <ListGroup as="ol" numbered>
                {post.map(post => <ListExample like={post.like} text={post.text} id={post.id}/>)}
            </ListGroup>
        </div>
    );
}
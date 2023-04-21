import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

export const CreatePost = () => {
    const [post, setPost] = React.useState(null);

    function createPost() {
        const params = new URLSearchParams();
        params.append('text', document.getElementById("floatingText").value);
        axios
            .post("http://localhost:8080/notes/create", params)
            .then((response) => {
                setPost(response.data);
            });

        alert("Created")
    }

    return (
            <div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingText" placeholder="Text for note"></input>
                    <label htmlFor="floatingPassword">Text for note</label>
                </div>
                <br/>
                <div><Button onClick={createPost} as="input" type="submit" value="Submit" />{' '}</div>
            </div>
    );
}
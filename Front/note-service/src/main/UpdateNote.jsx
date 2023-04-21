import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

export const UpdateNote = () => {
    const [post, setPost] = React.useState(null);

    function updatePost() {
        const params = new URLSearchParams();
        params.append('text', document.getElementById("floatingText").value);
        params.append('id', document.getElementById("floatingId").value);
        axios
            .put("http://localhost:8080/notes/update", params)
            .then((response) => {
                setPost(response.data);
            });

        alert("Updated")
    }

    return (
        <div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingText" placeholder="Text for note"></input>
                <label htmlFor="floatingText">Text for note</label>
            </div>
            <div className="form-floating">
                <input type="id" className="form-control" id="floatingId" placeholder="Text for Id"></input>
                <label htmlFor="floatingId">Id of existing note</label>
            </div>
            <br/>
            <div><Button onClick={updatePost} as="input" type="submit" value="Submit" />{' '}</div>
        </div>
    );
}
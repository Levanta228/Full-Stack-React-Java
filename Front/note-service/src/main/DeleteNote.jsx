import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

export const DeleteNote = () => {
    const [post, setPost] = React.useState(null);

    function deletePost() {
        const params = new URLSearchParams();
        params.append('id', document.getElementById("floatingId").value);
        axios
            .delete(`http://localhost:8080/notes/delete/${document.getElementById("floatingId").value}`)
            .then((response) => {
                setPost(response.data);
            });

        alert("Deleted")
    }

    return (
        <div>
            <div className="form-floating">
                <input type="id" className="form-control" id="floatingId" placeholder="Text for Id"></input>
                <label htmlFor="floatingId">Id of existing note</label>
            </div>
            <br/>
            <div><Button onClick={deletePost} as="input" type="submit" value="Submit" />{' '}</div>
        </div>
    );
}
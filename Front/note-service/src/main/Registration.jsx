import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

export const Registration = () => {
    const [post, setPost] = React.useState(null);

    function register() {
        const params = new URLSearchParams();
        params.append('username', document.getElementById("floatingUsername").value);
        params.append('password', document.getElementById("floatingPassword").value);
        axios
            .post("http://localhost:8080/user/register", params)
            .then((response) => {
                setPost(response.data);
            });

        alert("Registered")
    }

    return (
        <div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingUsername" placeholder="Text for note"></input>
                <label htmlFor="floatingText">Username</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Text for Id"></input>
                <label htmlFor="floatingId">Password</label>
            </div>
            <br/>
            <div><Button onClick={register} as="input" type="submit" value="Submit" />{' '}</div>
        </div>
    );
}
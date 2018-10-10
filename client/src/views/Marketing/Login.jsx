import React from "react";
import { Card, CardHeader, CardBody, Input, FormGroup, Button } from "reactstrap";
import "./Marketing.css";
import MarketingNavbar from "components/MarketingNavbar/MarketingNavbar.jsx";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 

    handleChange(event) {
        let key = event.target.name;
        this.setState({ [key]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (
            this.state.email.trim() !== "" &&
            this.state.password.trim() !== ""
        ) {
            fetch("/api/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                mode: "cors",
                body: JSON.stringify(this.state)
            })
                .then(response => {
                    if (!response.ok) {
                        this.setState({ error: response.statusText })
                    }

                    response.json().then(function (data) {
                        // window.location.replace("/workarea/dashboard");
                    });
                }).catch(error => {
                    alert("failed " + error)
                    this.setState({ error: "Incorrect response from the server: " + error });
                }); // parses response to JSON

        }
        else {
            this.setState({ error: "Fill in all the fields" });
        }


    }

    render() {
        return (
            <div><MarketingNavbar />
                <div className="MarketingAuthContainer">
                    <Card className="MarketingCentralCard">
                        <CardHeader>
                            <h5 className="title">Login</h5>
                        </CardHeader>
                        <CardBody>

                            <form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Input type="email" name="email" id="email"
                                        onChange={this.handleChange}
                                        placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password" id="password"
                                        onChange={this.handleChange}
                                        placeholder="Password " />
                                </FormGroup>
                                <Button className="btn btn-primary">Login</Button>
                                <br /><a href="signup">Click here </a>to sign up.
                        </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Login;

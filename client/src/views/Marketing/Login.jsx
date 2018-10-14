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
            error: ""
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
            //using Fetch since Axios has horrible HTTP error hendling
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
                console.log(response)
                
                if (response.status == 401) {
                    this.setState({error:"Incorrect login credentials"});
                    return;
                }

                if (!response.ok) {
                    this.setState({ error: response.statusText })
                    return;
                }

                response.json().then(function (data) {
                    let replaceUrl = null;
                    if (!data.isComplete) {
                            replaceUrl = "/complete_profile";
                    }
                    else {
                        if (data.isVendor) {
                            replaceUrl = "/connect_to_startup";
                        } else {
                            replaceUrl = "/connect_to_vendor";
                        }
                    }
                    window.location.replace(replaceUrl);
                });
            }).catch(error => {
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
                                {this.state.error ? (
                                    <span className="text-danger">{this.state.error}<br /></span>

                                ) : (
                                        <br />
                                    )}
                                <Button className="btn btn-primary">Login</Button>
                                <br />Or <a href="signup">click here </a>to sign up.
                        </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Login;

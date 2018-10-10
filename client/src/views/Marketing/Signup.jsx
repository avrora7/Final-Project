import React from "react";
import { Card, CardHeader, CardBody, Input, Label, FormGroup } from "reactstrap";
import "./Marketing.css";
import MarketingNavbar from "components/MarketingNavbar/MarketingNavbar.jsx";

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            company: "",
            email: "",
            password: "",
            password2: "",
            isVendor: true,
            error: null
        };
        this.handleRadio = this.handleRadio.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let key = event.target.name;
        this.setState({ [key]: event.target.value });
    }

    handleRadio(event) {
        let key = event.target.name;
        this.setState({ [key]: event.target.value === "true" });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (
            this.state.email.trim() !== "" &&
            this.state.company.trim() !== "" &&
            this.state.password.trim() !== "" &&
            this.state.password2.trim() !== ""
        ) {
            if (this.state.password.trim() === this.state.password2.trim()) {
                fetch("/api/signup", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state)
                })
                    .then(response => {
                        if (!response.ok) {
                            this.setState({ error: response.statusText })
                        }
                        
                        response.json().then(function (data) {
                           window.location.replace("/login");
                        });
                    }).catch(error => {
                        alert("failed " + error)
                        this.setState({ error: "Incorrect response from the server: " + error });
                    }); // parses response to JSON
            } else {
                this.setState({ error: "Passwords don't match" });
            }

        }
        else {
            this.setState({ error: "Fill in all the fields" });
        }


    }

    // handleSignUp() {
    //     fetch("http://localhost:3002", {
    //         method: "POST", // *GET, POST, PUT, DELETE, etc.
    //         mode: "cors", // no-cors, cors, *same-origin
    //         // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //         // credentials: "same-origin", // include, same-origin, *omit
    //         // headers: {
    //         //     "Content-Type": "application/json; charset=utf-8",
    //         //     // "Content-Type": "application/x-www-form-urlencoded",
    //         // },
    //         // redirect: "follow", // manual, *follow, error
    //         // referrer: "no-referrer", // no-referrer, *client
    //         body: JSON.stringify(data), // body data type must match "Content-Type" header
    //     })
    //     .then(response => 
    //     {
    //         response.json()
    //     }); // parses response to JSON
    // }


    render() {
        return (
            <div><MarketingNavbar />
                <div className="MarketingAuthContainer">

                    <Card className="MarketingCentralCard">
                        <CardHeader>
                            <h5 className="title">Sign Up</h5>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Input type="email"
                                        name="email"
                                        id="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="company" id="company"
                                        value={this.state.company}
                                        onChange={this.handleChange}
                                        placeholder="Business name " />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password" id="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        placeholder="Password " />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password2" id="password2"
                                        value={this.state.password2}
                                        onChange={this.handleChange}
                                        placeholder="Re-type password" />
                                </FormGroup>
                                <FormGroup tag="fieldset">
                                    <label>I am</label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="isVendor" value="true" checked={this.state.isVendor}
                                                onChange={this.handleRadio}
                                            />{' '}
                                            Vendor (provide services to startups)
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="isVendor" value="false" checked={!this.state.isVendor}
                                                onChange={this.handleRadio}
                                            />{' '}
                                            Startup (looking for help)
                                 </Label>
                                    </FormGroup>
                                </FormGroup>
                                {this.state.error ? (
                                    <span className="text-danger">{this.state.error}<br /></span>

                                ) : (
                                        <br />
                                    )}
                                <button type="submit" className="btn btn-primary">Sign up2</button>
                                <br /><a href="login">Click here </a>to login.
                        </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Signup;

import React from "react";
import { Card, CardHeader, CardBody, Input, Label, FormGroup, Button } from "reactstrap";
import "./Marketing.css";
import MarketingNavbar from "components/MarketingNavbar/MarketingNavbar.jsx";

class Signup extends React.Component {
    render() {
        return (
            <div className="MarketingAuthContainer">
                <MarketingNavbar />
                <Card className="MarketingCentralCard">
                    <CardHeader>
                        <h5 className="title">Sign Up</h5>
                    </CardHeader>
                    <CardBody>
                        <form>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="company" id="company" placeholder="Business name " />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="password" placeholder="Password " />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password2" id="password2" placeholder="Re-type password" />
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <label>I am</label>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Vendor (provide services to startups)
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Startup (looking for help)
                                 </Label>
                                </FormGroup>
                            </FormGroup>
                            <Button className="btn btn-primary">Sign Up</Button>
                            <br/><a href="login">Click here </a>to login.
                        </form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Signup;

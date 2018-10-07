import React from "react";
import { Card, CardHeader, CardBody, Input, FormGroup, Button } from "reactstrap";
import "./Marketing.css";
import MarketingNavbar from "components/MarketingNavbar/MarketingNavbar.jsx";

class Login extends React.Component {
    render() {
        return (
            <div>
                <MarketingNavbar />
                <div className="MarketingAuthContainer">
                    <Card className="MarketingCentralCard">
                        <CardHeader>
                            <h5 className="title">Login</h5>
                        </CardHeader>
                        <CardBody>
                            <form>
                                <FormGroup>
                                    <Input type="email" name="email" id="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password" id="password" placeholder="Password " />
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

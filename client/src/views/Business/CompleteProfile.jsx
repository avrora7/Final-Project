import React from "react";
import { Card, CardHeader, CardBody, Input, FormGroup, FormText } from "reactstrap";
import "../Marketing/Marketing.css";
import MarketingNavbar from "components/MarketingNavbar/MarketingNavbar.jsx";

class CompleteProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            address: "",
            zip:"",
            state:"",
            country:"",
            phone:"",
            manager:"",
            intro:"",
            isVendor:false,
            specialization: -1,
            error: null,
            specs: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        let that = this;
        fetch("/api/user/currentprofileform") 
            .then(response => {
                if (!response.ok) that.setState({ error: response.statusText })
                else {
                    response.json().then(function (json) {
                        let specs = [];
                        json.specs.forEach(elt => {
                            let nextId = elt.id;
                            let nextText = elt.name + " -> " + elt.Service.name;
                            specs.push({id:nextId, name:nextText});
                        });
                        console.log(specs);
                        that.setState({ isVendor: json.user.isVendor, specs: specs });
                    });
                }
            }).catch(error => {
                alert("failed " + error)
                that.setState({ error: "Incorrect response from the server: " + error });
            }); // parses response to JSON
    }

    handleChange(event) {

        let key = event.target.name;
        console.log(event.target.value)
        this.setState({ [key]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // if (
        //     this.state.email.trim() !== "" &&
        //     this.state.company.trim() !== "" &&
        //     this.state.password.trim() !== "" &&
        //     this.state.password2.trim() !== ""
        // ) {
        //     if (this.state.password.trim() === this.state.password2.trim()) {
        //         fetch("/api/signup", {
        //             method: "POST",
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(this.state)
        //         })
        //             .then(response => {
        //                 if (!response.ok) {
        //                     this.setState({ error: response.statusText })
        //                 }

        //                 response.json().then(function (data) {
        //                     window.location.replace("/login");
        //                 });
        //             }).catch(error => {
        //                 alert("failed " + error)
        //                 this.setState({ error: "Incorrect response from the server: " + error });
        //             }); // parses response to JSON
        //     } else {
        //         this.setState({ error: "Passwords don't match" });
        //     }

        // }
        // else {
        //     this.setState({ error: "Fill in all the fields" });
        // }


    }

    render() {
        return (
            <div><MarketingNavbar />
                <div className="MarketingAuthContainer">

                    { !this.state.isVendor ?  (
                        
                    <span>...</span>
                    ) : ( 
                    <Card className="MarketingCentralCard">
                        <CardHeader>
                            <h5 className="title">Complete
                            {this.state.isVendor ? ( <span> Vendor </span> ) : ( <span> Startup </span> )}
                            Profile</h5>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Input type="text" name="address" id="address"
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        placeholder="Address " />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="zip" id="zip"
                                        value={this.state.zip}
                                        onChange={this.handleChange}
                                        placeholder="ZIP or postal code " />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="state" id="state"
                                        value={this.state.state}
                                        onChange={this.handleChange}
                                        placeholder="State or province " />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="country" id="country"
                                        value={this.state.country}
                                        onChange={this.handleChange}
                                        placeholder="Country " />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="phone" id="phone"
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        placeholder="Phone " />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="text" name="manager" id="manager"
                                        value={this.state.manager}
                                        onChange={this.handleChange}
                                        placeholder="Manager " />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="select" 
                                    name="specialization" 
                                    defaultValue="-1" 
                                    id="specialization" 
                                    onChange={this.handleChange}>
                                        <option value="-1" >Select a specialization</option>
                                        {this.state.specs.map(function(spec, index){
                                            return <option key={ index } value={spec.id}>{spec.name}</option>;
                                        })}
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="textarea" name="intro" id="intro"
                                        value={this.state.intro}
                                        onChange={this.handleChange}
                                        placeholder="Introduction "></Input>
                                </FormGroup>

                                {this.state.error ? (
                                    <span className="text-danger">{this.state.error}<br /></span>

                                ) : (
                                        <br />
                                    )}
                                <button type="submit" className="btn btn-primary">Save</button>
                                <br /><a href="login">Click here </a>to login.
                        </form>
                        </CardBody>
                    </Card>

                    )}

                </div>
            </div>
        );
    }
}

export default CompleteProfile;

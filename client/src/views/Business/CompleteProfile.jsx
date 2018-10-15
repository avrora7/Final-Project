import React from "react";
import { Card, CardHeader, CardBody, Input, FormGroup } from "reactstrap";
import "../Marketing/Marketing.css";
import VendorNavbar from "components/VendorNavbar/VendorNavbar.jsx";
import StartupNavbar from "components/StartupNavbar/StartupNavbar.jsx";
import "./Business.css";

class CompleteProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            address: "",
            city: "",
            zip: "",
            state: "",
            country: "",
            phone: "",
            manager: "",
            intro: "",
            logo: "",
            managerPhoto:"",
            website:"",
            isVendor: false,
            specialization: -1,
            industry: -1,
            error: null,
            specs: [],
            industries: [],
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
                        if (json.user == null) {
                            window.location.replace("/")
                        }
                        let specs = [];
                        if (json.specs != null) {
                            json.specs.forEach(elt => {
                                let nextId = elt.id;
                                let nextText = elt.name + " -> " + elt.Service.name;
                                specs.push({ id: nextId, name: nextText });
                            });
                        }
                        let industries = [];
                        if (json.industries != null) {
                            industries = json.industries;
                        }

                        console.log(specs);
                        that.setState({ isVendor: json.user.isVendor, specs: specs, industries: industries });
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
        console.log(this.state)
        let that = this;
        event.preventDefault();
        let validated =
            this.state.address.trim() !== "" &&
            this.state.website.trim() !== "" &&
            this.state.city.trim() !== "" &&
            this.state.zip.trim() !== "" &&
            this.state.state.trim() !== "" &&
            this.state.country.trim() !== "" &&
            this.state.phone.trim() !== "" &&
            this.state.manager.trim() !== "" &&
            (
                (this.state.isVendor && this.state.specialization !== -1)
                ||
                (!this.state.isVendor && this.state.industry !== -1)
            ) &&
            this.state.intro.trim() !== "";
        if (validated) {

            let body = {
                address: that.state.address,
                city: that.state.city,
                zip: that.state.zip,
                state: that.state.state,
                country: that.state.country,
                phone: that.state.phone,
                manager: that.state.manager,
                intro: that.state.intro,
                website: that.state.website
            };

            if (that.state.logo != "") body.logo = that.state.logo;
            if (that.state.managerPhoto != "") body.managerPhoto = that.state.managerPhoto;

            if (this.state.isVendor) {
                body.specializationId = parseInt(that.state.specialization);
            } else {
                body.industryId = parseInt(that.state.industry);
            }

            fetch("/api/user", {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(response => {
                    if (!response.ok) {
                        that.setState({ error: response.statusText })
                    }

                    response.json().then(function (data) {
                        if (that.state.isVendor) {
                            window.location.replace("/connect_to_startup");
                        } else {
                            window.location.replace("/connect_to_vendor");
                        }
                    });
                }).catch(error => {
                    that.setState({ error: "Incorrect response from the server: " + error });
                }); // parses response to JSON

        }
        else {
            that.setState({ error: "Fill in all the fields" });
        }


    }

    render() {
        return (
            <div className="business">
                {!this.state.isVendor == null ? (
                    <span>...</span>
                ) : (
                        <span>
                            {this.state.isVendor ? (<VendorNavbar />) : (<StartupNavbar />)}

                            <div className="MarketingAuthContainer">
                                <Card className="MarketingCentralCard">
                                    <CardHeader>
                                        <h5 className="title">Complete
                                    {this.state.isVendor ? (<span> Vendor </span>) : (<span> Startup </span>)}
                                            Profile</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <form onSubmit={this.handleSubmit}>
                                            <FormGroup>
                                                <Input type="text" name="website" id="website"
                                                    value={this.state.website}
                                                    onChange={this.handleChange}
                                                    placeholder="Website " />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="logo" id="logo"
                                                    value={this.state.logo}
                                                    onChange={this.handleChange}
                                                    placeholder="Logo URL " />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="address" id="address"
                                                    value={this.state.address}
                                                    onChange={this.handleChange}
                                                    placeholder="Address " />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="text" name="city" id="city"
                                                    value={this.state.city}
                                                    onChange={this.handleChange}
                                                    placeholder="City " />
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
                                                <Input type="text" name="managerPhoto" id="managerPhoto"
                                                    value={this.state.managerPhoto}
                                                    onChange={this.handleChange}
                                                    placeholder="Manager photo URL " />
                                            </FormGroup>
                                            {this.state.isVendor ? (
                                                <FormGroup>
                                                    <Input type="select"
                                                        name="specialization"
                                                        defaultValue="-1"
                                                        id="specialization"
                                                        onChange={this.handleChange}>
                                                        <option value="-1" >Select a specialization</option>
                                                        {this.state.specs.map(function (spec, index) {
                                                            return <option key={index} value={spec.id}>{spec.name}</option>;
                                                        })}
                                                    </Input>
                                                </FormGroup>
                                            ) : (
                                                    <FormGroup>
                                                        <Input type="select"
                                                            name="industry"
                                                            defaultValue="-1"
                                                            id="industry"
                                                            onChange={this.handleChange}>
                                                            <option value="-1" >Select an industry</option>
                                                            {this.state.industries.map(function (industry, index) {
                                                                return <option key={index} value={industry.id}>{industry.name}</option>;
                                                            })}
                                                        </Input>
                                                    </FormGroup>
                                                )}

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

                                        </form>
                                    </CardBody>
                                </Card>



                            </div>
                        </span>
                    )}
            </div>
        );
    }
}

export default CompleteProfile;

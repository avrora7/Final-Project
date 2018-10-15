import React from "react";
import { Input, FormGroup } from "reactstrap";
import "../Marketing/Marketing.css";
import VendorNavbar from "components/VendorNavbar/VendorNavbar.jsx";
import StartupNavbar from "components/StartupNavbar/StartupNavbar.jsx";
import "./Business.css";

const logoStyle = {
    maxWidth: "80px",
    borderWidth: "2px",
    borderColor: "#eeeeee",
    borderStyle: "solid"
};

const STATUS_NA = "Not connected";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            message: "",
            userId: props.match.params.userId,
            isVendor: props.match.params.isVendor == 'true',
            user: {
                messages:[]
            },
            error: null
        };
        this.handleConnect = this.handleConnect.bind(this);
        this.handleDisconnect = this.handleDisconnect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    handleConnect() {
        let that = this;
        window.axios.get("/api/relationship/connect/" + this.state.userId)
            .then(res => {
                console.log(res)
                let usr = that.state.user;
                usr.messages = [];
                usr.relationshipId = res.data;
                that.setState({user: usr});
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: "Error" })
            });
    }

    handleDisconnect() {
        let that = this;
        window.axios.get("/api/relationship/disconnect/" + this.state.user.relationshipId)
            .then(res => {
                let usr = that.state.user;
                usr.relationshipId = null;
                usr.messages = [];
                that.setState({user: usr});
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: "Error" })
            });
    }
   

    componentDidMount() {
        let that = this;

        window.axios.get("/api/user/" + this.state.userId)
            .then(res => {
                let user = res.data;
                console.log(user)
                user.fullAddress = user.address + ", " + user.city + ", " + user.state + ", " + user.zip + ", " + user.country;
                user.mapAddress = user.address + "+" + user.city + "+" + user.state + "+" + user.country;
                that.setState({ user: user });
                
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: "Error" })
            });
    }

    handleChange(event) {
        let key = event.target.name;
        console.log(event.target.value)
        this.setState({ [key]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.message.trim() == "") return;
        window.axios.post("/api/message/" + this.state.user.relationshipId, {message:this.state.message} )
            .then(res => {
                let message = res.data;
                let user = this.state.user;
                user.messages.unshift(message);
                this.setState({user:user, message:""});
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: "Error" })
            });
    }

    render() {
        return (
            <div>
                {this.state.isVendor ? (
                    <VendorNavbar />
                ):(
                    <StartupNavbar />
                )}
                
                <div className="container">
                    <h1>Profile</h1>
                    
                    <div className="row">
                        <div className="col-sm-8">
                            <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <th>
                                Company
                            </th>
                            <td>
                                <b><a target="_blank" href={this.state.user.website}>
                                    <img style={logoStyle} src={this.state.user.logo} />
                                    &nbsp;&nbsp;&nbsp;{this.state.user.company}</a></b><br/>
                                {this.state.user.intro}
                            </td>
                            <td rowSpan="3">
                                    {this.state.user.relationshipId == null ? (
                                    <button onClick={this.handleConnect} className="btn btn-primary">Connect</button>
                                    ) : (
                                    <button onClick={this.handleDisconnect} className="btn btn-warning">Disconnect</button>
                                    )}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Contact person
                            </th>
                            <td>
                                <img style={logoStyle} src={this.state.user.managerPhoto} />
                                &nbsp;&nbsp;&nbsp;{this.state.user.manager} ( {this.state.user.phone})
                                
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Address
                            </th>
                            <td>
                               <a target="_blank" href={"http://maps.google.com?q=" + this.state.user.mapAddress}>{this.state.user.fullAddress}</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                        </div>

                        <div className="col-sm-4">
                        {
                            this.state.user.relationshipId != null ? (
                            <span>
                                <h5>Messages</h5>
                                {this.state.user.messages.length == 0 ? (
                                    <span>No messages</span>
                                ) : (
                                    <span>

                                    {this.state.user.messages.map(function (message, index) {
                                    return <div key={index} className="alert alert-secondary message" >{message.text}</div>;
                                    })}

                                    </span>
                                )}
                                <form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Input type="textarea" name="message" id="message"
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                            placeholder="Write a message"></Input>
                                    </FormGroup>
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </form>
                            </span>
                        ): (<span></span>)}
                        </div>

                        
                    </div>

                   
                </div>
            </div>
        );
    }
}

export default Profile;

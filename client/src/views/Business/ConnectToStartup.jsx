import React from "react";
import { Input, FormGroup } from "reactstrap";
import "../Marketing/Marketing.css";
import VendorNavbar from "components/VendorNavbar/VendorNavbar.jsx";

const STATUS_NA = "Not connected";

class ConnectToStartup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            industryId: -1,
            users: [],
            industries: [],
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.extractRelationshipsAndMessageCount = this.extractRelationshipsAndMessageCount.bind(this);
    }

    extractRelationshipsAndMessageCount(user) {
        let relArray=user.VendorRelationships;
        if (relArray.length > 0) {
            user.relationship = relArray[0];
            user.relationship.messageCount = relArray[0].Messages.length;
        }
        else {
            user.relationship = {status:STATUS_NA, messageCount:0}
        }
    }

    componentDidMount() {
        let that = this;
        fetch("/api/user/list/" + this.state.industryId)
            .then(response => {
                if (!response.ok) that.setState({ error: response.statusText })
                else {
                    response.json().then(function (json) {
                        json.users.forEach(user => {
                            that.extractRelationshipsAndMessageCount(user);
                        })
                        

                        that.setState({ users: json.users, industries: json.industries });
                    });
                }
            }).catch(error => {
                alert("failed " + error)
                that.setState({ error: "Incorrect response from the server: " + error });
            }); // parses response to JSON
    }

    handleChange(event) {
        this.setState({ industryId: event.target.value }, () => {
            this.componentDidMount();
        })
    }



    render() {
        return (
            <div>
                <VendorNavbar />
                <div className="container">
                    <h1>Connect to a Startup</h1>
                    {this.state.error ? (
                        <span className="text-danger">{this.state.error}<br /></span>
                    ) : (
                            <br />
                        )}

                    <form>
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
                    </form>

                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Company</th>
                                <th>Location</th>
                                <th>Connection status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map(function (user, index) {
                                return <tr key={index}>
                                    <td>{user.id}</td>
                                    <td><a href={'/profile/' + user.id}>{user.company}</a></td>
                                    <td>{user.address}, {user.zip}, {user.country}</td>
                                    <td>{user.relationship.status}
                                        {user.relationship.status !== STATUS_NA ? (
                                        <span><br/>{user.relationship.messageCount} Messages</span>
                                        ) : (
                                        <span></span>
                                        )}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ConnectToStartup;

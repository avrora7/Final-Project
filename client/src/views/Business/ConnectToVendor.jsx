import React from "react";
import { Input, FormGroup } from "reactstrap";
import "../Marketing/Marketing.css";
import StartupNavbar from "components/StartupNavbar/StartupNavbar.jsx";
import "./Business.css";

const STATUS_NA = "Not connected";

class ConnectToVendor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            specializationId: -1,
            users: [],
            specializations: [],
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

        window.axios.get("/api/user/list/" + this.state.specializationId, this.state)
        .then(res => {
            res.data.users.forEach(user => {
                that.extractRelationshipsAndMessageCount(user);
            });
            that.setState({ users: res.data.users, specializations: res.data.specializations });
        })
        .catch(error => {
            console.log(error)
            this.setState({error: "Error"})
        });
    }

    handleChange(event) {
        this.setState({ specializationId: event.target.value }, () => {
            this.componentDidMount();
        })
    }



    render() {
        return (
            <div className="business">
                <StartupNavbar />
                <div className="container">
                    <h1>Vendors</h1>
                    {this.state.error ? (
                        <span className="text-danger">{this.state.error}<br /></span>
                    ) : (
                            <br />
                        )}

                    <form>
                        <FormGroup>
                            <Input type="select"
                                name="specialization"
                                defaultValue="-1"
                                id="specialization"
                                onChange={this.handleChange}>
                                <option value="-1" >Select a specialization</option>
                                {this.state.specializations.map(function (specialization, index) {
                                    return <option key={index} value={specialization.id}>{specialization.name}</option>;
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
                                    <td><a href={'/profile/' + user.id + '/false'}>{user.company}</a></td>
                                    <td>{user.address}, {user.city}, {user.zip}, {user.country}</td>
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

export default ConnectToVendor;

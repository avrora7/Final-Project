import React from "react";
import "../Marketing/Marketing.css";
import VendorNavbar from "components/VendorNavbar/VendorNavbar.jsx";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        // let that = this;
        // fetch("/api/user/currentprofileform")
        //     .then(response => {
        //         if (!response.ok) that.setState({ error: response.statusText })
        //         else {
        //             response.json().then(function (json) {
        //                 if (json.user == null) {
        //                     window.location.replace("/")
        //                 }
        //                 let specs = [];
        //                 json.specs.forEach(elt => {
        //                     let nextId = elt.id;
        //                     let nextText = elt.name + " -> " + elt.Service.name;
        //                     specs.push({ id: nextId, name: nextText });
        //                 });
        //                 console.log(specs);
        //                 that.setState({ isVendor: json.user.isVendor, specs: specs });
        //             });
        //         }
        //     }).catch(error => {
        //         alert("failed " + error)
        //         that.setState({ error: "Incorrect response from the server: " + error });
        //     }); // parses response to JSON
    }

    handleChange(event) {

        // let key = event.target.name;
        // console.log(event.target.value)
        // this.setState({ [key]: event.target.value });
    }

    handleSubmit = (event) => {
        // console.log(this.state)
        // let that = this;
        // event.preventDefault();
        // let validated =
        //     this.state.address.trim() !== "" &&
        //     this.state.zip.trim() !== "" &&
        //     this.state.state.trim() !== "" &&
        //     this.state.country.trim() !== "" &&
        //     this.state.phone.trim() !== "" &&
        //     this.state.manager.trim() !== "" &&
        //     this.state.specialization.trim() !== "" &&
        //     this.state.intro.trim() !== "";
        // if (validated) {
        //     fetch("/api/user", {
        //         method: "PUT",
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             address: that.state.address,
        //             zip: that.state.zip,
        //             state: that.state.state,
        //             country: that.state.country,
        //             phone: that.state.phone,
        //             manager: that.state.manager,
        //             specializationId: parseInt(that.state.spacialization),
        //             intro: that.state.intro
        //         })
        //     })
        //         .then(response => {
        //             if (!response.ok) {
        //                 that.setState({ error: response.statusText })
        //             }

        //             response.json().then(function (data) {
        //                 if (that.state.isVendor) {
        //                     window.location.replace("/workarea/vendor_dashboard");
        //                 } else {
        //                     window.location.replace("/workarea/startup_dashboard");
        //                 }
        //             });
        //         }).catch(error => {
        //             that.setState({ error: "Incorrect response from the server: " + error });
        //         }); // parses response to JSON

        // }
        // else {
        //     that.setState({ error: "Fill in all the fields" });
        // }
    }

    render() {
        return (
            <div>
                <VendorNavbar />
                <div className="container">
                    <h1>Profile</h1>
                </div>
            </div>
        );
    }
}

export default Profile;

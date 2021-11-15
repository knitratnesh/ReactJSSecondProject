import axios from "axios";
import { Component } from "react";
import { Panel } from "react-bootstrap";

export default class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.getUserDetails();
    }
    getUserDetails() {
        console.log("@@@@@@@ filename " + 'assets/jsonfiles/user' + this.props.id + ".json")
        axios.get('assets/jsonfiles/user' + this.props.id + ".json")
            .then(res => {
                console.log("value returned " + JSON.stringify(res))
                this.setState({ userDetails: res })
            });
    }

    componentDidUpdate(prevProps) {
        console.log("previous props " + JSON.stringify(prevProps.id))
        if (this.props.id !== prevProps.id) {
            this.getUserDetails(this.props.id);
        }
    }

    render() {
        if (!this.state.userDetails) {
            return <p>Loading user data ......</p>
        }
        return (
                        <Panel style={{display:'block', 
                            marginRight:'auto',textAlign:'center', justifyContent:'center'}}>  
                                              <Panel.Heading>
                        <Panel.Title>
                            {this.state.userDetails.data.name}
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p>Name : {this.state.userDetails.data.name}</p>
                        <p>Email : {this.state.userDetails.data.email}</p>
                        <p>Phone : {this.state.userDetails.data.phone}</p>
                        <p>City : {this.state.userDetails.data.city}</p>
                        <p>State : {this.state.userDetails.data.state}</p>
                        <p>Country : {this.state.userDetails.data.country}</p>
                        <p>Organization : {this.state.userDetails.data.organization}</p>
                        <p>Job Profile : {this.state.userDetails.data.jobProfile}</p>
                        <p>Additional Info : {this.state.userDetails.data.additionalInfo}</p>
                    </Panel.Body>
                </Panel>
        )
    }
}
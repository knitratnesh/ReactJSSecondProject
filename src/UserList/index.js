import { Component } from "react";
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import { useReducer } from "react/cjs/react.production.min";
import UserDetails from "../UserDetails";
import { findByLabelText } from "@testing-library/react";



export default class UserList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: 1,
            userListItem:[]
        }
    }

    componentDidMount(){
        this.getUserData();
    }
    getUserData() {
        fetch('assets/jsonfiles/userlist.json')
            .then((res) => res.json())
            .then((result) =>
                //console.log(JSON.stringify(result))
                this.setState({userListItem:result})
            )
    }

    setUserId(id){
        console.log("user id " + id)
        this.setState({ selectedUser: id })
    }

    render(){
        console.log("######" + JSON.stringify(this.state.userListItem))
        if (this.state.userListItem.length === 0) {
            return (<p>Data is loading.....</p>)
        }
        return(
            <div style={{marginTop:'10px', marginBottom: '10px', width:'100%', display:'flex', flexDirection:'row' }}>
                <div className="col-md-3">
                {
                    this.state.userListItem.map((user) =>{
                       return (
                           <Panel bsStyle="info" key={user.id} style={{display:'block',  border: 'solid 1px #a6d8a8',
                           marginLeft:'50px', marginRight:'auto',textAlign:'center', justifyContent:'center'}}>
                               {/* {user.name} */}
                               <Panel.Heading style={{backgroundColor:'grey', paddintTop:'10px', paddingBottom:'10px', paddingLeft:'15px', paddingRight:'15px', boxSizing:'border-box'}}>
                                   <Panel.Title style={{justifyContent:'center', alignItems:'center'}} componentClass="h3">{user.name}</Panel.Title>
                               </Panel.Heading>
                               <Panel.Body>
                                   <p>{user.email}</p>
                                   <p>{user.phone}</p>
                                   <Button bsStyle="info" onClick={() => this.setUserId(user.id)}>
                                       Click to view details
                                   </Button> 
                               </Panel.Body>
                           </Panel>
                       )
                    })
                }
                </div>
                <div className="col-md-12" style={{display:'flex', paddingLeft:'350px'}}>
                    <UserDetails id={this.state.selectedUser} />
                </div> 
            </div>
        )
    }

}
import React from 'react';
import './administrator.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { deleteDriversDetails, getDriverDetails, getDriverDetailsById, updateDriverDetails } from '../../Services/task.service';
//import { getDriverDetails, getDriverDetailsById, updateDriverDetails } from '../../Services/task.service';
//import Getdetails from '../Getdetails/getdetails';


class Administrator extends React.Component {
    constructor() {
        super();
        this.state = {
            drivers: [],
            id: "",
            deleteid: "",
            phone: "",
            updateid: "",
            finalquoteamount: ""
        }
        this.state = { getdata: "" }
    }

    componentDidMount() {
        let response = getDriverDetails();
        response.then(res => {
            // console.log(res); 
            this.setState({
                drivers: res
            })
            // console.log(this.state.drivers)
        })
    }

    // validate driver id before fecth
    validateGetDriver = () => {
        if(!(this.state.id)){
            alert("Driver id should not empty");
        }
        else{
            this.getDriver();
        }
    }

    //Get driver details by selecting driver id
    getDriver = () => {
        let response = getDriverDetailsById(this.state.id);
        response.then(res => {
            this.setState({
                drivers: res
            })
        })
        this.setState({
            getdata: true

        })   
    }
    
// validate driver id before deleting
    validateDeletedId = () =>{
        if(!(this.state.deleteid)){
            alert("Driver Id should not empty");
        }
        else{
            this.deleteDriver();
            alert('Deleted driver record from DB successfully...!!!');
        }
    }

    // Delete driver details by selecting driver id
    deleteDriver = () => {
            let response = deleteDriversDetails(this.state.deleteid);
            response.then(res => {
                console.log(res);
            })
            this.setState({
                id:"",
                phone:"",
                updateid:"",
                deleteid:"",
                getdata:""
            });     
    }

    //validate driver id before update
    validateUpdateDriver = () => {
        if(!(this.state.updateid)){
            alert("Driver id should not empty");
        }
        else{
            this.updateDriver();
        }
    }

    // update new mobile number by selecting driver id and put new mobile no
    updateDriver = () => {
        let response = updateDriverDetails(this.state.updateid, this.state.phone)
        response.then(res => {
            console.log(res);
        })
        this.getDriver();
    }

    // on chnage handle for getting driver details
    ontexthandle = (e) => {
        e.preventDefault();
        this.setState({
            id: e.target.value
        })
    }

    // on change handle for deleting driver details
    ontextdeletehandle = (e) => {
        e.preventDefault();
        this.setState({
            deleteid: e.target.value
        })
    }

    // on change handle for update phone number
    ontextphonehandle = (e) => {
        e.preventDefault();
        this.setState({
            phone: e.target.value
        })
    }

    //on change handle for update phone number of particular driver 
    ontextupdatehandle = (e) => {
        e.preventDefault();
        this.setState({
            updateid: e.target.value
        })
    }


    render() {
        return (
            <div className="ml-5 mr-5">
                <h3>Administrator Panel</h3>

                <Form>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Driver id?
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" name="textID" value={this.state.id} onChange={this.ontexthandle} placeholder=" " />
                        </Col>
                        <Col sm={2}>

                            <Button onClick={this.validateGetDriver} >-- --</Button>

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Driver id?
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" name="txtname" value={this.state.deleteid} onChange={this.ontextdeletehandle} placeholder="driver id" />
                        </Col>
                        <Col sm={2}>

                            <Button onClick={this.validateDeletedId}>Delete</Button>

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={2}>
                            Driver id?
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control type="text" name="updatename" onChange={this.ontextupdatehandle} value={this.state.updateid} placeholder="driver id" />
                        </Col>
                        <Col sm={4}>
                            <Form.Control type="phone" name="txtName" value={this.state.phone} onChange={this.ontextphonehandle} placeholder="Enter new telephone no" />
                        </Col>
                        <Col sm={2}>

                            <Button onClick={this.validateUpdateDriver}>Update</Button>
                        </Col>
                    </Form.Group>
                </Form>
                <br></br>
                <br></br>

                {/* {(this.state != undefined && this.state.drivers) ? <Getdetails drivers={this.state.drivers}></Getdetails> : ""} */}
                {(this.state.getdata === "") ? " " : <Getdetails drivers={this.state.drivers}></Getdetails>}

                {/* <Getdetails drivers={this.state.drivers}></Getdetails> */}
            </div>
        )
    }

}

export default Administrator;
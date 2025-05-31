import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dashboard from '../Dashboard/dashboard'
import Administrator from '../Administrator/administrator';


class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            firstName: "",
            lastName: "",
            phone: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            model: "",
            engine: "",
            driver: "",
            commercial: "No",
            outstate: "No",
            marketValue: "",
            date: "",
            message: "",
            firstNameError: "",
            lastNameError: "",
            titleError: "",
            phoneError: "",
            addressError1: "",
            addressError2: "",
            cityError: "",
            stateError: "",
            modelError: "",
            engineError: "",
            driverError: "",
            marketValueError: "",
            dateError: "",
            MessageError: ""
        }
        // this.onchangetaskName = this.onchangetaskName.bind(this);
        // this.onchangetasklastName = this.onchangetasklastName.bind(this);
    }

    // validating driver registration details
    handleValidation() {
        let firstNameError = " ";
        let lastNameError = "";
        let titleError = " ";
        let phoneError = "";
        let addressError1 = "";
        let addressError2 = "";
        let cityError = "";
        let stateError = "";
        let modelError = "";
        let engineError = "";
        let driverError = "";
        let marketValueError = "";
        let dateError = "";
        let MessageError = "";
        console.log("handle validation");

        if (!this.state.firstName) {

            firstNameError = "First name Can't be empty";
        }
        else {
            firstNameError = "";
        }

        if (!this.state.lastName) {

            lastNameError = "Last name Can't be empty";
        }
        else {
            lastNameError = "";
        }

        if (!this.state.title) {

            titleError = "Prefix can't be empty";
        }
        else {
            titleError = "";
        }

        if (!this.state.phone) {

            phoneError = "Phne number Can't be empty";
        }
        else {
            phoneError = "";
        }
        if (!this.state.address1) {

            addressError1 = "Adress1  Can't be empty";
        }
        else {
            addressError1 = "";
        }

        if (!this.state.address2) {

            addressError2 = "Adress2 number Can't be empty";
        }
        else {
            addressError2 = "";
        }

        if (!this.state.city) {

            cityError = "City Can't be empty";
        }
        else {
            cityError = "";
        }
        if (!this.state.state) {

            stateError = "State Can't be empty";
        }
        else {
            stateError = "";
        }
        if (!this.state.model) {

            modelError = "model number Can't be empty";
        }
        else {
            modelError = "";
        }
        if (!this.state.engine) {

            engineError = "engine size Can't be empty";
        }
        else {
            engineError = "";
        }
        if (!this.state.driver) {

            driverError = "driver number Can't be empty";
        }
        else {
            driverError = "";
        }
        if (!this.state.marketValue) {

            marketValueError = "market value Can't be empty";
        }
        else {
            marketValueError = "";
        }
        if (!this.state.date) {

            dateError = "date Can't be empty";
        }
        else {
            dateError = "";
        }
        if (!this.state.message) {

            MessageError = "message Can't be empty";
        }
        else {
            MessageError = "";
        }

        if (firstNameError || lastNameError || titleError || phoneError || addressError1 || addressError2 || cityError || stateError || modelError
            || engineError || driverError || marketValueError || dateError || MessageError) {
            this.setState({
                firstNameError, lastNameError, titleError, phoneError, addressError1, addressError2, cityError, stateError, modelError
                , engineError, driverError, marketValueError, dateError, MessageError
            })
            return false;
        }
        return true;

    }


    onchangetext = (event) => {
        // debugger;
        if (event.target.name === "prefix") {
            this.setState({
                title: event.target.value,
                titleError:""
            })
        }
        else if (event.target.name === "fname") {
            this.setState({
                firstName: event.target.value,
                firstNameError:""
            })
        }
        else if (event.target.name === "lname") {
            this.setState({
                lastName: event.target.value,
                lastNameError:""
            })
        }
        else if (event.target.name === "mobile") {
            this.setState({
                phone: event.target.value,
                phoneError:""
            })
        }
        else if (event.target.name === "addr1") {
            this.setState({
                address1: event.target.value,
                addressError1:""
            })
        }
        else if (event.target.name === "addr2") {
            this.setState({
                address2: event.target.value,
                addressError2:""
            })
        }
        else if (event.target.name === "city") {
            this.setState({
                city: event.target.value,
                cityError:""
            })
        }
        else if (event.target.name === "state") {
            this.setState({
                state: event.target.value,
                stateError:""
            })
        }
        else if (event.target.name === "modelsize") {
            this.setState({
                model: event.target.value,
                modelError:""
            })
        }
        else if (event.target.name === "enginecapacity") {
            this.setState({
                engine: event.target.value,
                engineError:""
            })
        }
        else if (event.target.name === "driversize") {
            this.setState({
                driver: event.target.value,
                driverError:""
            })
        }
        else if (event.target.name === "commercial") {
            this.setState({
                commercial: event.target.value
            })
        }
        else if (event.target.name === "outstate") {
            this.setState({
                outstate: event.target.value
            })
        }
        else if (event.target.name === "currentMarketVal") {
            this.setState({
                marketValue: event.target.value,
                marketValueError:""
            })
        }
        else if (event.target.name === "firstRegisteredDate") {
            this.setState({
                date: event.target.value,
                dateError:""
            })
        }
        else if (event.target.name === "message") {
            this.setState({
                message: event.target.value,
                MessageError:""
            })
        }
    }

    // if validation successfully done, then only data will store to JSON
    onsavedata = (event) => {
        const validate = this.handleValidation();
        if (validate) {
            alert('Registered Successfully...!!!');
           //    console.log(this.props.drivers)
            this.props.saveTask1({
                title: this.state.title,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phone: this.state.phone,
                address1: this.state.address1,
                address2: this.state.address2,
                city: this.state.city,
                state: this.state.state,
                model: this.state.model,
                engine: this.state.engine,
                driver: this.state.driver,
                commercial: this.state.commercial,
                outstate: this.state.outstate,
                marketValue: this.state.marketValue,
                date: this.state.date,
                message: this.state.message
            });
           

            // clear the UI screen
            this.setState({
                title: '',
                firstName: '',
                lastName: '',
                phone: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                model: '',
                engine: '',
                driver: '',
                commercial: '',
                marketValue: '',
                date: '',
                message: ''
            })
        }
        else {
            console.log("form is not validated");
        }
    }

    render() {
        return (
            <div className="ml-5 mr-5" >
                <div className="text-center mt-4 mb-4 ">
                    <img src="logo.png" alt='logo' width="30% "
                        height="5%"></img>
                </div>
                <h5>Tell us about yourself and your  vehicle </h5>
                <h5>Note:</h5>
                <p> Some quick example text to build on the card title and make up the bulk of
                the card's content Some quick example text to build on the card title and make up the bulk of
                the card's content Some quick example text to build on the card title and make up the bulk of
                the card's content Some quick example text to build on the card title and make up the bulk of
                the card's content Some quick example text<br></br> to build on the card title and make up the bulk of
      the card's content </p>

                <Form >
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPrefix">
                            <Form.Label>Prefix</Form.Label>
                            <Form.Control as="select" name="prefix" type="text" value={this.state.title} onChange={this.onchangetext} placeholder="Please enter your prefix"  >

                                <option value="0" default>Please Select</option>
                                <option value="Ms"> Ms </option>
                                <option value="Miss"> Miss </option>
                                <option value="Mrs"> Mrs </option>
                                <option value="Mr"> Mr </option>
                                <option value="Master"> Master </option>

                            </Form.Control>
                            <div style={{ fontSize: 12, color: "red" }}>{this.state.titleError}</div>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" name="fname" value={this.state.firstName} onChange={this.onchangetext} placeholder="Please enter your firstname" />
                            <div style={{ fontSize: 12, color: "red" }}>{this.state.firstNameError}</div>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" name="lname" value={this.state.lastName} onChange={this.onchangetext} placeholder="Please enter your lastname" />
                            <div style={{ fontSize: 12, color: "red" }}>{this.state.lastNameError}</div>
                        </Form.Group>
                    </Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="number">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control name="mobile" value={this.state.phone} onChange={this.onchangetext} placeholder="Phone number" />
                            <div style={{ fontSize: 12, color: "red" }}>{this.state.phoneError}</div>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="addr1" value={this.state.address1} onChange={this.onchangetext} placeholder="Enter street" />
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.addressError1}</div>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control name="addr2" value={this.state.address2} onChange={this.onchangetext} placeholder="Enter street road" />
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.addressError2}</div>
                    </Form.Group>

                    <Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" name="city" value={this.state.city} onChange={this.onchangetext} />
                            <div style={{ fontSize: 12, color: "red" }}>{this.state.cityError}</div>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Label>PostCode</Form.Label>
                            <Form.Control type="text" placeholder="Please enter your state" name="state" value={this.state.state} onChange={this.onchangetext} />
                            <div style={{ fontSize: 12, color: "red" }}>{this.state.stateError}</div>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Vehicle body style</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Control as="select" name="modelsize" type="text" value={this.state.model} onChange={this.onchangetext} placeholder="Please enter vehicle body style"  >
                                <option value="0" default>Please Select</option>
                                <option value="Cabriolet">Cabriolet</option>
                                <option value="Coupe">Coupe</option>
                                <option value="Estate">Estate</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                            <div style={{ fontSize: 12, color: "red" }}>{this.state.modelError}</div>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Engine Capacity (cc)</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Control as="select" name="enginecapacity" type="text" value={this.state.engine} onChange={this.onchangetext} placeholder="Please enter engine capacity"  >
                                <option value="0" default>Please Select A Size</option>
                                <option value="1000">1000</option>
                                <option value="1600">1600</option>
                                <option value="2000">2000</option>
                                <option value="2500">2500</option>
                                <option value="3000">3000</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                            <div style={{ fontSize: 12, color: "red" }}>{this.state.engineError}</div>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>How many additional drivers will there be?</Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Control as="select" name="driversize" type="text" value={this.state.driver} onChange={this.onchangetext} placeholder="Please enter additional no of driver"  >
                                <option value="0" default>How many additional drivers will there be</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Control>
                            <div style={{ fontSize: 12, color: "red" }}>{this.state.driverError}</div>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Col sm><Form.Label htmlFor="inputPassword6">Will the vehicle be used for commercial purpose?</Form.Label></Col>
                        <Col sm>
                            <Col>
                                <div >
                                    <input class="form-check-input" type="radio" name="commercial" onChange={this.onchangetext} value="Yes" />
                                    <label class="form-check-label" >
                                        Yes
                                       </label>
                                </div>
                            </Col>
                            <Col>
                                <div >
                                    <input class="form-check-input" type="radio" name="commercial" onChange={this.onchangetext} value="No" checked={this.state.commercial === "No"} />
                                    <label class="form-check-label" >
                                        No
                                     </label>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                    <br></br>

                    <Row>
                        <Col sm><Form.Label htmlFor="inputPassword6">Will the vehicle be used outside the registered state?</Form.Label></Col>
                        <Col sm>
                            <Col>
                                <div >
                                    <input class="form-check-input" type="radio" name="outstate" onChange={this.onchangetext} value="Yes" />
                                    <label class="form-check-label" >
                                        Yes
                                       </label>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <input class="form-check-input" type="radio" name="outstate" onChange={this.onchangetext} value="No" checked={this.state.outstate === "No"} />
                                    <label class="form-check-label" >
                                        No
                                     </label>
                                </div>
                            </Col>

                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>Curent market value</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastname">
                            <Form.Control as="select" name="currentMarketVal" type="text" value={this.state.marketValue} onChange={this.onchangetext} placeholder="Select range 0-50000"  >
                                <option value="0" default>Select range 0-50000</option>
                                <option value="2000">2000</option>
                                <option value="3000">3000</option>
                                <option value="4000">4000</option>
                                <option value="5000">5000</option>
                                <option value="7000">7000</option>
                            </Form.Control>
                           <div style={{ fontSize: 12, color: "red" }}>{this.state.marketValueError}</div>
                        </Form.Group>
                       
                    </Row>
                    <Row>
                        <Col sm><Form.Label htmlFor="inputPassword6">When was the vehicle first registered?</Form.Label></Col>
                        <Col sm>
                            <Form.Control type="date" placeholder="Registered date" name="firstRegisteredDate" value={this.state.date} onChange={this.onchangetext} />
                            <div style={{ fontSize: 12, color: "red" }}>{this.state.dateError}</div>
                        </Col>
                    </Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} name="message" value={this.state.message} onChange={this.onchangetext} />
                        <div style={{ fontSize: 12, color: "red" }}>{this.state.MessageError}</div>
                    </Form.Group>
                    <Button variant="primary" size="lg" block onClick={this.onsavedata} >
                        Submit
                   </Button>
                </Form>
            </div >
        )
    }
}

export default Registration;
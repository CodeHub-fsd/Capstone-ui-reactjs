import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Component/Header/header';
import Registration from './Component/Registration/registration';
import Footer from './Component/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Login from './Component/Login/login'
import Administrator from './Component/Administrator/administrator'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard/dashboard';



class App extends React.Component {
  render() {
    return (
      // we are inserting Header, Dashboard and Administrator data
      <div>
        <Header className="rowheader"></Header>

        <Router>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/administrator' component={Administrator}></Route>
        </Router>
        <Footer className="rowfooter"></Footer>

        {/* <Row className="rowheader" >
          <Header></Header>
        </Row> */}

        {/* <Row className="rowdash">
          <Dashboard></Dashboard>
        {/* <Row className="rowlogin">
          <Login></Login>
        </Row> */}

        {/* <Row className="rowfooter">
          <Footer></Footer>
        </Row> */}
        {/* <Login></Login> */}
      </div>
    )
  }

}

export default App;

import React from "react";
import classnames from "classnames";
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button
} from "reactstrap";
import Dashboard from "views/examples/Dashboard";

class DashboardTabs extends React.Component {

  constructor(props) {

    super(props);
    console.log(props.values);
    

  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <div className="section section-tabs" style={{background:"#ffffff", color:"#2196f3"}}>
        <Container  style={{paddingBottom:"6%"}}>
          <div className="title">
            <h3 className="mb-1" style={{color:"#2196f3"}}>Hello {this.props.values.detail?this.props.values.detail:this.props.values}! What would you like to do to today? </h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
                
              </div>
              <Card style={{height:"80%",width:"80%"}}>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                
                <Button
                  
                  tag={Link} 
                  to={{
                    pathname:this.props.values.detail=="broker@gmail.com"? "/broker-page":"/private-owner",
                    state: {
                      fromNotifications: this.props.values.detail?this.props.values.detail:this.props.values
                    }}}
                >
                  <i  aria-hidden="true"></i> New Vessel Registration
                
                </Button>
              
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
               
              </div>
              <Card style={{height:"80%",width:"80%"}}>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                <large className=" font-weight-bold" style={{color:"#2196f3"}}>
                  Transfer of Ownership
                </large>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
               
              </div>
              <Card style={{height:"80%",width:"80%"}}>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                <large className=" font-weight-bold" style={{color:"#2196f3"}}>
                  Registration Renewal
                </large>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
                
              </div>
              <Card style={{height:"80%",width:"80%"}}>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                <large className="font-weight-bold" style={{color:"#2196f3"}}>
                  Change of Port
                </large>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
                
              </div>
              <Card style={{height:"80%",width:"80%"}}>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                <large className="font-weight-bold" style={{color:"#2196f3"}}>
                  Vessel Dimension change
                </large>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
                
              </div>
              <Card style={{height:"80%",width:"80%"}}>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                      <large className="font-weight-bold" style={{color:"#2196f3"}}>
                  Name Reservation
                </large>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DashboardTabs;

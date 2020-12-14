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

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
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
        <Container>
          <div className="title">
            <h3 className="mb-1" style={{color:"#2196f3"}}> </h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
                <large className="text-uppercase font-weight-bold" style={{color:"#2196f3"}}>
                  New Vessel Registration
                </large>
              </div>
              <Card>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                      <p>
                      With EROSC you can register the vessel with few clicks! If you are a broker, private owner or a company who would like to register your vessel, please click here. <br />
                        <br />
                       </p>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
                <large className="text-uppercase font-weight-bold" style={{color:"#2196f3"}}>
                  Transfer of Ownership
                </large>
              </div>
              <Card>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                      <p>
                        Need to change the owner of the vessel? ransfer of Ownership is no longer a pain! <br></br><br></br>A few steps of verification and the process is completed!
                        <br />
                       </p>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
                <large className="text-uppercase font-weight-bold" style={{color:"#2196f3"}}>
                  Registration Renewal
                </large>
              </div>
              <Card>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                      <p>
                        If you are already our user, registration renewal is just a click away! <br></br>For new users, feel free to add in your details here. <br />
                        <br />
                       </p>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
                <large className="text-uppercase font-weight-bold" style={{color:"#2196f3"}}>
                  Change of Port
                </large>
              </div>
              <Card>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                      <p>
                        Need to change the port of your registration? Change the port of your registration without any hassle! Please click here to Proceed. <br />
                        <br />
                       </p>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
                <large className="text-uppercase font-weight-bold" style={{color:"#2196f3"}}>
                  Vessel Dimension/Material change
                </large>
              </div>
              <Card>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                      <p>
                        Are there any changes in the dimensions of the vessel? Or any change of material? Please click here to report the change. <br />
                        <br />
                       </p>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="4">
              <div className="mb-3">
                <large className="text-uppercase font-weight-bold" style={{color:"#2196f3"}}>
                  Name Reservation
                </large>
              </div>
              <Card>
                <CardHeader>     
                </CardHeader>
                <CardBody>
                      <p>
                        Would like to reserve a name for your vessel to use in future? Please click here for name reservation. <br />
                        <br />
                       </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;

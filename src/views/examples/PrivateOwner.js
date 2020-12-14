
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import SimpleSelect from "views/IndexSections/Dropdown";

class PrivateOwnerPage extends React.Component {

  constructor(props) {

    super(props);


  }
  state = {
    squares1to6: "",
    squares7and8: ""
  };
  componentDidMount() {
    console.log(this.props);
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };

createValidator = e => {
            
                const email = e.target.value;
                console.log('Testing1');
                console.log(email.length);
                if (email.length<8) {
                    document.getElementById("success").innerHTML="";
                    document.getElementById("error").innerHTML="Length for Ship name should be greater than 8";
                    return;
                }
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var raw = JSON.stringify({"signature":email});

                        console.log(raw);
                        var requestOptions = {
                          method: 'POST',
                          headers: myHeaders,
                          body: raw,
                          redirect: 'follow'
                        };
                        const proxyurl = "https://cors-anywhere.herokuapp.com/";
                        fetch(proxyurl+"https://ferrous-portal-295000.wl.r.appspot.com/private_owner_details", requestOptions)
                        .then(response => response.json() )
                        .then(result => {if (result[0]==null || result[0]==undefined) {document.getElementById("error").innerHTML="";document.getElementById("success").innerHTML="Shipname Available"}  else {
                            document.getElementById("success").innerHTML="";
                            document.getElementById("error").innerHTML="Ship Name Not Available"; }})
                        .catch(error => console.log('error', error));      
                        
    
}
  render() {

    return (
      <>
     
        <div className="wrapper" style={{background:"#ffffff"}}>
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content" >
              <Container>
                <Row>
                  <Col className="offset-lg-3 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: this.state.squares7and8,background:"#3358f4" }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8,background:"#3358f4" }}
                    />
                    <Card className="card-register" style={{background:"#ffffff"}}>
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square2.png")}
                          style={{ width:"200px",height:"250px" }}
                        />
                        
                        </CardHeader>
                      <CardBody>
                        <Form className="form">
                        <h4 style={{color:"#000000"}}>Private Owner</h4>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus
                            })}
                          >
                            
                            <SimpleSelect></SimpleSelect>
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{color: '#000000'}}>
                           
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Proposed Ship Name"
                              type="text"
                              onFocus={e =>
                                {
                                    console.log(this);
                                   
                                this.setState({ passwordFocus: true })
                                }
                              }
                              onBlur={e =>
                                
                                {this.createValidator(e);
                                this.setState({ passwordFocus: false })
                              }
                              }
                              style={{color: '#000000'}}
                              id="proposedshipname"
                            />
                                 
                          </InputGroup>
                          <InputGroup check className="text-left" style={{color:"#3358f4"}}>
                            
                           
                            <label id = "error" style={{color:"red"}}></label>
                            <label id = "success" style={{color:"green"}}></label>
               
                             </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{color: '#000000'}}>
                           
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Choice of Port"
                              type="text"
                              onFocus={e =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ passwordFocus: false })
                              }
                              style={{color: '#000000'}}
                              id="port"
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{color: '#000000'}}>
                           
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Length"
                              type="text"
                              onFocus={e =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ passwordFocus: false })
                              }
                              style={{color: '#000000'}}
                              id="length"
                            />
                          </InputGroup>
                          
                            
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                         
                            <TextField
                            style={{color: '#000000'}}
                              label="Date"
                              type="date"
                              
                              
                              id="date"
                              inputProps={{
                                min: "2020-11-25"
                              
                              }}
                            />
                          </InputGroup>
                          <FormGroup check className="text-left" style={{color:"#3358f4"}}>
                            
                           
                       
                            
                          </FormGroup>
                          <FormGroup check className="text-left" style={{color:"#3358f4"}}>
                            
                           
                         <label id = "error" style={{color:"red"}}></label>
                         <label id = "success" style={{color:"green"}}></label>
            
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                      <Button className="btn-round" size="lg" onClick={() => {
                      var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                console.log(this.props);
                        var raw = JSON.stringify({"username":this.props.location.state.fromNotifications ,"ship_type":document.getElementById("proposedshipname").value,"port":document.getElementById("port").value,"ship_lenght":document.getElementById("length").value,"signature":document.getElementById("proposedshipname").value,"registration_date":document.getElementById("date").value,"is_accurate":true});
                        
                        var requestOptions = {
                          method: 'POST',
                          headers: myHeaders,
                          body: raw,
                          redirect: 'follow'
                        };
                        const proxyurl = "https://cors-anywhere.herokuapp.com/";
                        fetch("https://ferrous-portal-295000.wl.r.appspot.com/private_single", requestOptions)
                          
                          .catch(error => console.log('error', error));
                          this.props.history.push({
                            pathname:'/checkout',
                            });
                      }}>
    
                       
                          Register
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                <div className="register-bg1" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6,background:"#3358f4" }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6,background:"#3358f4" }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6,background:"#3358f4" }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: this.state.squares1to6,background:"#3358f4" }}
                />
                <div
                  className="square square-5" 
                  id="square5"
                  style={{ transform: this.state.squares1to6 ,background:"#3358f4"}}
                />
                <div
                  className="square square-6"
                  id="square6" 
                  style={{ transform: this.state.squares1to6 ,background:"#3358f4"}}
                />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default PrivateOwnerPage;


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

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

class RegisterPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: ""
  };
  componentDidMount() {
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
  render() {

    return (
      <>
        <ExamplesNavbar />
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
                        <h1 style={{color:"#000000"}}>Login</h1>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{color: '#000000'}}>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                              style={{color: '#000000'}}
                              id="email"
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{color: '#000000'}}>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              onFocus={e =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ passwordFocus: false })
                              }
                              style={{color: '#000000'}}
                              id="password"
                            />
                          </InputGroup>
                          <FormGroup check className="text-left" style={{color:"#3358f4"}}>
                            
                           
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Forgot password?
                              </a>
                              .
            
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
   
                        var raw = JSON.stringify({"email":document.getElementById("email").value ,"password":document.getElementById("password").value});
                        
                        var requestOptions = {
                         
                          method: 'POST',
                          headers: myHeaders,
                          body: raw,
                          redirect: 'follow'
                        };
                        console.log(raw);
                        const proxyurl = "https://cors-anywhere.herokuapp.com/";
                        fetch(proxyurl+"https://ferrous-portal-295000.wl.r.appspot.com/details", requestOptions)
                          .then(response => response.json())
                          .then(result => {if (result[0]==null || result[0]==undefined) {document.getElementById("success").innerHTML="";document.getElementById("error").innerHTML="Incorrect Email or Password"} 
                          else {
                            document.getElementById("error").innerHTML="";
                            document.getElementById("success").innerHTML="Login Successful!";
                            this.props.history.push({
                              pathname:'/dashboard',
                              search: '?username='+document.getElementById("email").value,
                              state: { detail: document.getElementById("email").value }});

                        }})
                          .catch(error => console.log('error', error));
                        
                      }}>
    
                       
                          Signin
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

export default RegisterPage;

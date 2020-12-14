import React, { Fragment } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import classnames from "classnames";
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {
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
// Destructure props
const Confirm = ({ handleNext, handleBack, values }) => {
  console.log(values.multiowner)
  const handleSubmit = () => {
    // Do whatever with the values

    // Show last compinent or success message
    handleNext()
  }
  const history = useHistory();
  return (
    
    <Fragment>
      <List disablePadding style={{color:"#000000"}}>
        <ListItem>
        <ListItemText primary="Account Type"  style={{color:"#000000"}}/>
          <ListItemText  value={values.multiowner} primary={values.multiowner} style={{color:"rgba(0, 0, 0, 0.54)",fontSize: "0.875rem",fontFamily:"Roboto"}}/>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Eligibility"  style={{color:"#000000"}}/>
          <ListItemText   primary={values.eligibility} style={{color:"rgba(0, 0, 0, 0.54)",fontSize: "0.875rem",fontFamily:"Roboto"}}/>
        </ListItem>

        <Divider />

      </List>
      <Form className="form">
              <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{color: '#000000'}}>
                                  <i className="tim-icons icon-email-85" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="First Name"
                                type="text"
                                
                                style={{color: '#000000'}}
                                id="firstname"
                              />
                            </InputGroup>
                            <InputGroup
                            
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{color: '#000000'}}>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Last Name"
                              type="text"
                      
                              style={{color: '#000000'}}
                              id="lastname"
                            />
                          </InputGroup>
                          <InputGroup
                            
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{color: '#000000'}}>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                            
                              style={{color: '#000000'}}
                              id="email"
                            />
                          </InputGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{color: '#000000'}}>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              
                              style={{color: '#000000'}}
                              id="password"
                            />
                          </InputGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{color: '#000000'}}>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Confirm Password"
                              type="password"
                             
                              style={{color: '#000000'}}
                              id="confirmpassword"
                            />
                          </InputGroup>
                          
                      
                          <FormGroup check className="text-left" style={{color:"#3358f4"}}>
                         
                           
                         <label id = "error" style={{color:"red"}}></label>
                         <label id = "success" style={{color:"green"}}></label>
                         <label id = "accounttype" value={values.multiowner} style={{color:"green"}} hidden>{values.multiowner}</label>
                         <label id = "eligibility" value={values.eligibility} style={{color:"green"}} hidden>{values.eligibility}</label>
                          </FormGroup>
                        </Form>
                        
      <div style={{ display: "flex", marginTop: 10, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>

        <Button style={{ marginLeft: 10 }} variant="contained" color="secondary"  onClick={() => {
          
                      var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
   
                        var raw = JSON.stringify({"accounttype":document.getElementById("accounttype").innerHTML,"eligibility":document.getElementById("eligibility").innerHTML,"firstname":document.getElementById("firstname").value,"lastname":document.getElementById("lastname").value,"email":document.getElementById("email").value ,"password":document.getElementById("password").value});
                        console.log(raw);
                        var requestOptions = {
                          method: 'POST',
                          headers: myHeaders,
                          body: raw,
                          redirect: 'follow'
                        };
                        console.log(raw);
                        const proxyurl = "https://cors-anywhere.herokuapp.com/";
                        fetch("https://ferrous-portal-295000.wl.r.appspot.com/signup", requestOptions)
                          .then(response => response.text())
                          .then(result => console.log(result))
                          .catch(error => console.log('error', error));
                          history.push({
                            pathname:'/dashboard',
                            search: '?username='+document.getElementById("email").value,
                            state: { detail: document.getElementById("email").value }});
                      }}
                      
                      >
    
                       
                          Signin
                        </Button>



      </div>
    </Fragment>
  )
}

export default Confirm

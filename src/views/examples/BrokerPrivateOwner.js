
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
import TextField from '@material-ui/core/TextField';
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import SimpleSelect from "views/IndexSections/Dropdown";
import PortList from "views/IndexSections/PortList";
import { Link } from "react-router-dom";
import Propulsion from "views/IndexSections/Propulsion";

class BrokerPrivateOwner extends React.Component {

    
  constructor(props) {

    super(props);
    console.log(props);

  }
  



createValidator = e => {
            
                const email = e.target.value;
           
                if (email.length<8) {
                    document.getElementById("success").innerHTML="";
                    document.getElementById("error").innerHTML="Length for Ship name should be greater than 8";
                    return;
                }
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var raw = JSON.stringify({"username":"broker@gmail.com","signature":email});

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
                        .then(result => {if (result[0].results==null || result[0].results==undefined) {document.getElementById("error").innerHTML="Shipname not available";document.getElementById("success").innerHTML=""}  else {
                            document.getElementById("success").innerHTML="Ship name available for ports "+result[0].results;
                            document.getElementById("error").innerHTML=""; }})
                        .catch(error => console.log('error', error));      
                        
    
}
  render() {
    const today = new Date();
    var todays= today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();

    return (
         <React.Fragment>
     
        <div className="wrapper" style={{background:"#ffffff"}}>
          
          
                  
       
        
                        <Form className="form">
                        <h4 style={{color:"#000000"}}>Private Owner</h4>
                        <InputGroup
                            
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{color: '#000000'}}>
                             
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Primary Owner"
                                type="text"
                                required={true}
                                onFocus={e =>
                                  this.setState({ breadth: true })
                                }
                                onBlur={e =>
                                  this.setState({ passwordFocus: false })
                                }
                                style={{color: '#000000'}}
                                id="prim_owner"
                              />
                            </InputGroup>
                          <InputGroup
                           
                          >
                            
                            <SimpleSelect></SimpleSelect>
                            <PortList></PortList>
                            <Propulsion></Propulsion>
                          </InputGroup>
                         
                          <InputGroup
                            
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
                               
                                   
                                this.setState({ shipname: true })
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
                            
                            >
                             
                              <Input
                                placeholder="Length"
                                type="number"
                                required={true}
                                onFocus={e =>
                                  this.setState({ length: true })
                                }
                                onBlur={e =>
                                  this.setState({ passwordFocus: false })
                                }
                                style={{color: '#000000'}}
                                id="length"
  
                              />
                                  <InputGroupAddon addonType="prepend">
                                  <InputGroupText style={{color: '#000000'}}>
                               
                                  </InputGroupText>
                                </InputGroupAddon>
                               <Input
                                placeholder="Depth"
                                type="number"
                                required={true}
                                onFocus={e =>
                                  this.setState({ breadth: true })
                                }
                                onBlur={e =>
                                  this.setState({ passwordFocus: false })
                                }
                                style={{color: '#000000'}}
                                id="breadth"
                              />
                            </InputGroup>
                          <InputGroup
                            
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{color: '#000000'}}>
                             
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Ship Make and Model"
                                type="text"
                                required={true}
                                onFocus={e =>
                                  this.setState({ breadth: true })
                                }
                                onBlur={e =>
                                  this.setState({ passwordFocus: false })
                                }
                                style={{color: '#000000'}}
                                id="model"
                              />
                            </InputGroup>
                            <InputGroup
                            
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{color: '#000000'}}>
                             
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Total Engine Power (kW)"
                                type="number"
                                required={true}
                                onFocus={e =>
                                  this.setState({ breadth: true })
                                }
                                onBlur={e =>
                                  this.setState({ passwordFocus: false })
                                }
                                style={{color: '#000000'}}
                                id="power"
                              />
                            </InputGroup>
                           
                            <InputGroup
                            
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{color: '#000000'}}>
                             
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Year of Build"
                                type="number"
                                required={true}
                                onFocus={e =>
                                  this.setState({ breadth: true })
                                }
                                onBlur={e =>
                                  this.setState({ passwordFocus: false })
                                }
                                style={{color: '#000000'}}
                                id="yearbuild"
                              />
                            </InputGroup>
                            <InputGroup
                            
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{color: '#000000'}}>
                             
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Name of builder"
                                type="text"
                                required={true}
                                onFocus={e =>
                                  this.setState({ breadth: true })
                                }
                                onBlur={e =>
                                  this.setState({ passwordFocus: false })
                                }
                                style={{color: '#000000'}}
                                id="builder"
                              />
                            </InputGroup>
                            <InputGroup
                            
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{color: '#000000'}}>
                             
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Country of build"
                                type="text"
                                required={true}
                                onFocus={e =>
                                  this.setState({ breadth: true })
                                }
                                onBlur={e =>
                                  this.setState({ passwordFocus: false })
                                }
                                style={{color: '#000000'}}
                                id="countrybuild"
                              />
                            </InputGroup>
                            <InputGroup
                          
                          >
        
                           
                           
                      
                      <Label style={{color:"gray", marginBottom:"-3%"}}>Registration Date</Label>
                  
                             
                          
                      </InputGroup>
                          <InputGroup
                          
                          >
                         
                            <TextField
                            style={{color: '#000000'}}
                        
                              type="date"
                              required={true}
                              
                              id="date"
                              inputProps={{
                               
                                min: todays
                              
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
        
                      <Button className="btn-round" size="lg" style={{background:"#5393ff", float:"left"}} onClick={() => {
                      var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                console.log(this.props);
                        var raw = JSON.stringify({"username":"broker@gmail.com" ,"radio_call":"" ,"ship_type":document.getElementById("demo-simple-select").innerText,"port":document.getElementById("port-simple-select").innerText,"ship_lenght":document.getElementById("length").value,"width":document.getElementById("breadth").value,"builder":document.getElementById("builder").value,"countrybuild":document.getElementById("countrybuild").value,"yearbuild":document.getElementById("yearbuild").value,"breadth":document.getElementById("breadth").value,"grosstonnage":"","model":document.getElementById("model").value,"power":document.getElementById("power").value,"signature":document.getElementById("proposedshipname").value,"registration_date":document.getElementById("date").value,"is_accurate":true});
                        console.log(raw);
                        var requestOptions = {
                          method: 'POST',
                          headers: myHeaders,
                          body: raw,
                          redirect: 'follow'
                        };
                        const proxyurl = "https://cors-anywhere.herokuapp.com/";
                        fetch(proxyurl+"https://ferrous-portal-295000.wl.r.appspot.com/private_single", requestOptions)
                          
                          .catch(error => console.log('error', error));
                         
                        this.props.handleNext()
                      }}>
    
                       
                          Register 
                        </Button>
                        <Button className="btn-round" size="lg"  style={{background:"#ff4569", float:"right"}} tag={Link} to={{pathname:'/dashboard' ,
                    state: {
                      fromNotifications: this.props.values.email
                    }}}
                      >
    
                       
                          Cancel
                        </Button>
                        
          
             
            </div>
        

      </React.Fragment>
    );
  }
}

export default BrokerPrivateOwner;

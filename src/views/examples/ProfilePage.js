import React, { useState } from "react"
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
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import FirstStep from "./FirstStep"
import SecondStep from "./SecondStep"
import Confirm from "./Confirm"
import Success from "./Success"
import Design from "./Design";
import formValidation from "../Helper/formValidation"
import LoginNavBar from "components/Navbars/LoginNavBar";
import Dashboard from "./Dashboard"
// Step titles
const labels = ["Account type", "Eligibility", "Registration"]

const initialValues = {
  multiowner: "",
  eligibility:"",
  firstName: "",
  lastName: "",
  email: "",
  gender: ""
}



function StepForm  () {
  const [activeStep, setActiveStep] = useState(0)
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})

  // Proceed to next step
  const handleNext = () => setActiveStep(prev => prev + 1)
  // Go back to prev step
  const handleBack = () => setActiveStep(prev => prev - 1)

  // Handle form change
  const handleChange = e => {
    const { name, value } = e.target
    console.log(name);
    console.log(value);
    // Set values
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }))

    // set errors
    const error = ""

    setFormErrors({
      [name]: error
    })
  }

  const handleSteps = step => {
    switch (step) {
      case 0:
        return (
          <FirstStep handleNext={handleNext} handleChange={handleChange} values={formValues} formErrors={formErrors} />
          
        )
      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        )
      case 2:
        return <Confirm handleNext={handleNext} handleBack={handleBack} values={formValues} />
      default:
        break
    }
  }


    return (
      <>
        <LoginNavBar />
        <Design></Design>
        <div className="wrapper" style={{background:"#ffffff" }}>
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content" >
           
              <Container>
                <Row>
                  <Col className="offset-lg-3 offset-md-3" lg="5" md="6">
                   
                    <Card className="card-register" style={{background:"#ffffff", color:"#000000" }}>
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square2.png")}
                          style={{ width:"200px",height:"250px" }}
                        />
                        
                        </CardHeader>
                      <CardBody>
                        
      {activeStep === labels.length ? (
        // Last Component
        <Success values={formValues} />
      ) : (
        <>
          
          <Stepper activeStep={activeStep} alternativeLabel>
            {labels.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(activeStep)}
        </>
      )}
                      </CardBody>
          
                
                    </Card>
                  </Col>
                </Row>
                
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }


export default StepForm;

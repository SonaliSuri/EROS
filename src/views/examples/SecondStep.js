import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Radio_Eligibility from "./Radio_Eligibility"

// Destructuring props
const SecondStep = ({ handleNext, handleBack, handleChange, values, formErrors }) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    values.eligibility !=""
  return (
    <>
      <Radio_Eligibility handleNext={handleNext} handleBack={handleBack} handleChange={handleChange} values={values}></Radio_Eligibility>
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained" color="default" onClick={handleBack} style={{ marginRight: 10 }}>
          Back
        </Button>
        <Button variant="contained" disabled={!isValid} color="primary" onClick={isValid ? handleNext : null}>
          Next
        </Button>
      </div>
    </>
  )
}

export default SecondStep

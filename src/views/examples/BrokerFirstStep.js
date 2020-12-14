import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import BrokerTabsFirst from "./BrokerTabsFirst"
// Destructuring props
const BrokerFirstStep = ({ handleNext, handleChange, values, formErrors }) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    values.multiowner !=""
  return (
    <Fragment>
      
        <BrokerTabsFirst handleNext={handleNext} handleChange={handleChange} values={values}>

        </BrokerTabsFirst>
    
      <div style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}>
        <Button variant="contained"  disabled={!isValid} color="primary" onClick={isValid?handleNext:null}>
          Next
        </Button>
      </div>
    </Fragment>
  )
}

export default BrokerFirstStep

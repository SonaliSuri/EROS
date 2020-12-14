import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioButtonsGroup = ({ handleNext, handleChange, values, formErrors }) => {
console.log(values);
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">I am a ......</FormLabel>
      <RadioGroup aria-label="multiowner" name="multiowner" value={values.multiowner} onChange={handleChange} style={{color:"#000000"}}>
        <FormControlLabel value="Private Owner" control={<Radio />} label="Private Owner" style={{color:"#000000"}}/>
        <FormControlLabel value="Broker" control={<Radio />} label="Broker" style={{color:"#000000"}}/>
        <FormControlLabel value="Company" control={<Radio />} label="Company" style={{color:"#000000"}}/>
      </RadioGroup>
    </FormControl>
  );
}
export default RadioButtonsGroup;
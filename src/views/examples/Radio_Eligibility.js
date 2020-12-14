import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioButtonsEligibility = ({ handleNext,handleBack,handleChange, values, formErrors }) => {
  
console.log(values);
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Eligibilty</FormLabel>
      <RadioGroup aria-label="eligibility" name="eligibility" value={values.eligibility} onChange={handleChange} style={{color:"#000000"}}>
        <FormControlLabel value="British Dependent territories (Includes NAVIS Album)" control={<Radio />} label="British Dependent territories (Includes NAVIS Album)" style={{color:"#000000"}}/>
        <FormControlLabel value="British Overseas(includes Hong Kong)" control={<Radio />} label="British Overseas(includes Hong Kong)" style={{color:"#000000"}}/>
        <FormControlLabel value="EU member state under articles 48 / 52 of the EU Treaty" control={<Radio />} label="EU member state under articles 48 / 52 of the EU Treaty" style={{color:"#000000"}}/>
        <FormControlLabel value="Commonwealth" control={<Radio />} label="Commonwealth" style={{color:"#000000"}}/>
        <FormControlLabel value="Non-United Kingdom nationals settled in the United Kingdom" control={<Radio />} label="Non-United Kingdom nationals settled in the United Kingdom" style={{color:"#000000"}}/>
        <FormControlLabel value="United Kingdom" control={<Radio />} label="United Kingdom" style={{color:"#000000"}}/>
      </RadioGroup>
    </FormControl>
  );
}
export default RadioButtonsEligibility
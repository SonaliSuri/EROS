import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup_Broker() {
  const [value, setValue] = React.useState('nocompany');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Do you have a company?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} style={{color:"#000000"}}>
      <FormControlLabel value="nocompany" control={<Radio />} label="No" style={{color:"#000000"}}/>
    <FormControlLabel value="yescompany" control={<Radio />} label="Yes" style={{color:"#000000"}}/>
        
      </RadioGroup>
    </FormControl>
  );
}
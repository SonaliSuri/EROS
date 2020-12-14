import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Propulsion() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="propulsion-simple-select-label" style={{color:"#000000"}}>Propulsion</InputLabel>
        <Select
          labelId="propulsion-simple-select-label"
          id="propulsion-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"Propeller"}>Propeller</MenuItem>
          <MenuItem value={"Pump Jet"}>Pump Jet</MenuItem>
          <MenuItem value={"Paddle Wheel"}>Paddle Wheel</MenuItem>
          <MenuItem value={"Sail"}>Sail</MenuItem>
          <MenuItem value={"Voith-Schneider Cyclo-Rotor"}>Voith-Schneider Cyclo-Rotor</MenuItem>
          <MenuItem value={"Caterpillar"}>Caterpillar</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}

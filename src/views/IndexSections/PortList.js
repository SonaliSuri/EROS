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

export default function PortList() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="port-simple-select-label" style={{color:"#000000"}}>Port</InputLabel>
        <Select
          labelId="port-simple-select-label"
          id="port-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"Whitby Harbour"}>Whitby Harbour</MenuItem>
          <MenuItem value={"Scarborough"}>Scarborough</MenuItem>
          <MenuItem value={"Point Newcastle"}>Point Newcastle</MenuItem>
          <MenuItem value={"Barrow North"}>Barrow North</MenuItem>
          <MenuItem value={"Barrow South"}>Barrow South</MenuItem>
          <MenuItem value={"Barrow South"}>Barrow South</MenuItem>
          <MenuItem value={"Robin Hood's Bay"}>Robin Hood's Bay</MenuItem>
          <MenuItem value={"Victoria"}>Victoria</MenuItem>


        </Select>
      </FormControl>
     
    </div>
  );
}

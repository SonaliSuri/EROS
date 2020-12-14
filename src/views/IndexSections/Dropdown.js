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

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" style={{color:"#000000"}}>Ship type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"Dinghy"}>Dinghy</MenuItem>
          <MenuItem value={"Hovercraft"}>Hovercraft</MenuItem>
          <MenuItem value={"Inflatable"}>Inflatable</MenuItem>
          <MenuItem value={"Motor Sailer"}>Motor Sailer</MenuItem>
          <MenuItem value={"Motor Yacht"}>Motor Yacht</MenuItem>
          <MenuItem value={"Motor Sailer"}>Motor Sailer</MenuItem>
          <MenuItem value={"Narrow Boat"}>Narrow Boat</MenuItem>
          <MenuItem value={"Sailing Yacht"}>Sailing Yacht</MenuItem>
          <MenuItem value={"Sports Boat"}>Sports Boat</MenuItem>
          <MenuItem value={"Wet Bike"}>Wet Bike</MenuItem>
        </Select>
      </FormControl>
     
    </div>
  );
}

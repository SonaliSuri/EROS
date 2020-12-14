import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DynamicTable from './DynamicTable';
import Button from "@material-ui/core/Button"
class AddressForm extends React.Component {
    constructor(props) {
        super(props);
      console.log(props);
      this.state = { checked: false };
      this.handleChanges = this.handleChanges.bind(this);
    }
    
    handleChanges() {
        this.setState({
          checked: !this.state.checked
      })
      console.log(this.state.checked);
      
    }
    
    render() {
        const hidden = this.state.checked ? '' : 'hidden';
  return (
    <React.Fragment >
      <div style={{color:"#000000"}}>
      <Typography variant="h6" gutterBottom style={{color:"#000000"}}>
        Personal details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} style={{color:"#000000 !important"}}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            fullWidth
            baseColor = "#000000"
            textColor = "#000000"
            autoComplete="given-name"
            style={{color:"#000000"}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Email"
            name="Email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>





        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox style={{color:"#000000"}} name="saveAddress" value="yes" id="checks" checked={ this.state.checked } onChange={ this.handleChanges }/>}
            label="I verify all details arr ?"
          />
         
        </Grid >
        <Grid item xs={12} hidden={!this.state.checked}>
        
           <DynamicTable></DynamicTable> 
        
        </Grid>
      </Grid>
      <Button variant="contained"   color="primary" onClick={this.props.handleNext}>
          Next
        </Button>
      </div>
    </React.Fragment>
  );
}
}

export default AddressForm;
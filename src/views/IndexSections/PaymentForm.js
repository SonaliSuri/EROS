import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";

class PaymentForm extends React.Component{
  constructor(props) {
    super(props);

  this.state = { checked: false };

}
render() {

 


  return (
    <React.Fragment>
      <Typography  gutterBottom style={{color:"black"}}>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" 
  />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          baseColor = '#000000'
          textColor = '#000000'
            required
            type="number"
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          type="number"
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            style={{color:"black"}}
            label="Remember credit card details for next time"
          />
        </Grid>
        <Button variant="contained"   color="primary" onClick={this.props.handleNext}>
          Next
        </Button>
      </Grid>
    </React.Fragment>
  );
}
}
export default PaymentForm;
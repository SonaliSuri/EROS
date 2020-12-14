import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button"
const products = [
  { name: 'Application Fee', desc: 'Private Owner', price: '$100.00' },
  { name: 'Registration Fee', desc: 'Private Owner', price: '$100.00' },
];
const addresses = [];
const payments = [
  { name: 'Supported', detail: 'Visa' }
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

class Review extends React.Component{
  constructor(props) {
    super(props);
  console.log(props);
  this.state = { checked: false };

}

  
render(){
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{color:"black"}}>
      New Vessel Registration summary
      </Typography>
      <List disablePadding style={{color:"black"}}>
        {products.map((product) => (
          <ListItem  key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} style={{color:"black"}} />
            <Typography variant="body2" style={{color:"black"}}>{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem >
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{color:"black"}}>
            $200.00
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
       
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom  style={{color:"black"}}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name} style={{color:"black"}}>
                <Grid item xs={6}>
                  <Typography gutterBottom style={{color:"black"}}>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom style={{color:"black"}}>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained"   color="primary" onClick={this.props.handleNext}>
          Next
        </Button>
    </React.Fragment>
  );
}
}

export default Review;
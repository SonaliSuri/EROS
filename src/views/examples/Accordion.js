import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ValueGetterGrid from './TableGrid';

const useStyles = makeStyles((theme) => ({
  
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion(props) {
   

 
    console.log(props.values.detail);
    

  
  const classes = useStyles();

  return (
    <div style={{background:"#000000"}}>
      
      <Accordion style={{background:"#ffffff"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" style={{background:'rgba(0, 0, 0, .03)'}}
        >
          <Typography className={classes.heading} style={{color:"#000000"}}>Submitted Applications</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ValueGetterGrid values={props}></ValueGetterGrid>
        </AccordionDetails>
      </Accordion>
  
      
    </div>

  );
}

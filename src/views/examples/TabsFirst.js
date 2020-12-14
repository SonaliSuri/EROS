import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RadioButtonsGroup from './Radio';
import Radio_Broker from './Radio_Broker';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SimpleTabs = ({ handleNext, handleChange, values, formErrors }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{width:"77%",margin:"40px"}}>
      <AppBar position="static">
        
      </AppBar>
      <TabPanel value={value} index={0} style={{color:"#000000"}}>
        <RadioButtonsGroup handleNext={handleNext} handleChange={handleChange} values={values} formErrors={formErrors}></RadioButtonsGroup>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Radio_Broker></Radio_Broker>
      </TabPanel>

    </div>
  );
}
export default SimpleTabs;
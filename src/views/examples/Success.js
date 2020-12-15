import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
  box: {
    padding: theme.spacing(3)
  },
  title: {
    marginTop: 30
  }
}))

const Success = () => {
  var myHeaders = new Headers();

  var requestOptions = {
    method: 'POST'

  };
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  fetch("https://ferrous-portal-295000.wl.r.appspot.com/send_email",requestOptions)

  .catch(error => console.log('error', error));

  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Typography variant="h2" align="center" style={{color:"black"}}>
        Thank you!
      </Typography>
      <Typography component="p" align="center" className={classes.title} style={{color:"black"}}>
        You will get an email with confirmation!
      </Typography>
     
    </Box>
  )
}

export default Success

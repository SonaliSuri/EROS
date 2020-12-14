import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Design extends React.Component {
    state = {
        squares1to6: "",
        squares7and8: ""
      };
      componentDidMount() {
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", this.followCursor);
      }
      componentWillUnmount() {
        document.body.classList.toggle("register-page");
        document.documentElement.removeEventListener(
          "mousemove",
          this.followCursor
        );
      }
      followCursor = event => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        this.setState({
          squares1to6:
            "perspective(500px) rotateY(" +
            posX * 0.05 +
            "deg) rotateX(" +
            posY * -0.05 +
            "deg)",
          squares7and8:
            "perspective(500px) rotateY(" +
            posX * 0.02 +
            "deg) rotateX(" +
            posY * -0.02 +
            "deg)"
        });
      };
      render() {
  return (
<div className="registers" >
<div
  className="square square-1"
  id="square1"
  style={{ transform: this.state.squares1to6,background:"#3358f4" }}
/>
<div
  className="square square-2"
  id="square2"
  style={{ transform: this.state.squares1to6,background:"#3358f4" }}
/>
<div
  className="square square-3"
  id="square3"
  style={{ transform: this.state.squares1to6,background:"#3358f4" }}
/>
<div
  className="square square-4"
  id="square4"
  style={{ transform: this.state.squares1to6,background:"#3358f4" }}
/>
<div
  className="square square-5" 
  id="square5"
  style={{ transform: this.state.squares1to6 ,background:"#3358f4"}}
/>
<div
  className="square square-6"
  id="square6" 
  style={{ transform: this.state.squares1to6 ,background:"#3358f4"}}
/>
<div className="square square-7" id="square7" style={{ transform: this.state.squares1to6, background:"#3358f4"}}/>
<div className="square square-8" id="square8" style={{ transform: this.state.squares1to6, background:"#3358f4"}}/>
</div>
);
}
}
export default Design;
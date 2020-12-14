
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import Tabs from "views/IndexSections/Tabs.js";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import SimpleAccordion from "./Accordion";
import NormalBar from "components/Navbars/Normal";
import SimpleTabs from "./TabsFirst";
import DashboardTabs from "views/IndexSections/DashboardTabs";

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    console.log(props);
  }
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

  render() {
    return (
      <>
        <NormalBar />
        <div className="wrapper" style={{background:"#ffffff"}}>
         
   
            <div className="content"style={{paddingTop:"1%",background:"#ffffff"}} >
            <SimpleAccordion values={this.props.location.state.fromNotifications?this.props.location.state.fromNotifications:this.props.location.state }></SimpleAccordion>
              
                    <DashboardTabs values={this.props.location.state.fromNotifications?this.props.location.state.fromNotifications:this.props.location.state}></DashboardTabs>
                
             
                
           
            </div>
          </div>
          <Footer />

      </>
    );
  }
}

export default Dashboard;

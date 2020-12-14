import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      
      <div className="page-header header-filter" style={{background : '#ffffff'}}>
        
        
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        
        <Container>
       
          <div className="content-center brand" style={{top:"45%",left:"50%"}}>
          <img className="testing" src="https://clipartstation.com/wp-content/uploads/2017/11/ship-clipart.png"></img>
            <h1 className="h1-seo" >REGISTER OF SHIPPING</h1>
            <h3 className="d-none d-sm-block">
            
            </h3>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;

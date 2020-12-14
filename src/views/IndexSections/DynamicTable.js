import React from "react";
import { render } from "react-dom";

class DynamicTable extends React.Component {
  state = {
    rows: [{}]
  };
  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
  

    rows[idx] = {
      ["email"]: name=="name"? value:rows[idx]["email"],
      ["share"]: name=="mobile"? value:rows[idx]["share"]
    };

    this.setState({
      rows
    });

  };
  handleAddRow = () => {
    const item = {
      name: "",
      mobile: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
    console.log(this.state.rows);

    var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                    
                        var raw = JSON.stringify({"email":this.state.rows[this.state.rows.length-1].email,"share":this.state.rows[this.state.rows.length-1].share});
                        console.log(raw);
                        var requestOptions = {
                          method: 'POST',
                          headers: myHeaders,
                          body: raw,
                          redirect: 'follow'
                        };
                        console.log(raw);
                        const proxyurl = "https://cors-anywhere.herokuapp.com/";
                        fetch("https://ferrous-portal-295000.wl.r.appspot.com/add_private_owners", requestOptions)
                          .then(response => response.text())
                          .then(result => console.log(result))
                          .catch(error => console.log('error', error));
                         
  };
  handle
  RemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
   
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
        
            var raw = JSON.stringify({"email":this.state.rows[idx].email});
            console.log(raw);
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            console.log(raw);
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            fetch("https://ferrous-portal-295000.wl.r.appspot.com/delete_private_owners", requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
  }
  render() {
    return (
      <div>
        <div className="container" style={{color:"#000000"}}>
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table
                className="table table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center" style={{color:"#000000"}}> Sr No </th>
                    <th className="text-center" style={{color:"#000000"}}> Email </th>
                    <th className="text-center"style={{color:"#000000"}}> Share % </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td><p style={{color:"#000000"}}>{idx+1}</p></td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.rows[idx].name}
                          onChange={this.handleChange(idx)}
                          className="form-control emails" style={{color:"#000000"}}
                          
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="mobile"
                          value={this.state.rows[idx].mobile}
                          onChange={this.handleChange(idx)} 
                          className="form-control shares" style={{color:"#000000"}}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          <i class="fa fa-trash"></i>
                         
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={this.handleAddRow} className="btn btn-primary">
              <i class="fa fa-user-plus" aria-hidden="true"></i>
              </button>
            
            
     
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DynamicTable;
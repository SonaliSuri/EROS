import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import CustomizedTables from './TabularGrid';

function getFullName(params) {
  return `${params.getValue('firstName') || ''} ${
    params.getValue('lastName') || ''
  }`;
}

const columns = [
  { field: 'id', headerName: 'Form Number', width: 140 },
  { field: 'primary_owner', headerName: 'Username', width: 140 },
  { field: 'ship_type', headerName: 'Ship Type', width: 140 },
  { field: 'proposed_ship_name', headerName: 'Ship Name', width: 140 },
  { field: 'port', headerName: 'Port', width: 140 },
  { field: 'registration_date', headerName: 'Registration Date', width: 170 },
  { field: 'ship_lenght', headerName: 'Ship Length', width: 140 }
  
];


var rows = 

[
    {   "id": "No records",
        
    }
]
class ValueGetterGrid extends React.Component {
  constructor(props) {

    super(props);
    this.state = { data: [] };

  }
  componentDidMount() {

  
    // Default options are marked with *
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
            console.log(this.props);
            var raw = JSON.stringify({"email":this.props.values.values.detail});
            
            var requestOptions = {
             
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            console.log(raw);
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            fetch(proxyurl+"https://ferrous-portal-295000.wl.r.appspot.com/get_grid_data", requestOptions)
              .then(response => response.json())
              .then(result => {
                this.setState({ data: result })
            })
              .catch(error => console.log('error', error));
  

}

render() {

  console.log(this.state);
  return (
    <div style={{ height: 250, width: '100%' }}>
      <CustomizedTables  values={this.state.data}/>
    </div>
  );
}
}
  export default ValueGetterGrid;

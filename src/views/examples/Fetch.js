import React from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";


class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      value: "",
      initial_data: [
        {
          userId: 1,
          id: 1,
          title:
            "SSsunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      ]
    };
    this.getColumns = this.getColumns.bind(this);
  }

  componentDidMount() {
    //const params = this.state.text
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }

  getColumns() {
    const getPostKeys = this.state.posts[0];
    if (getPostKeys) {
      const column =
        this.state.posts &&
        Object.keys(getPostKeys).map(key => {
          return {
            Header: key,
            accessor: key
          };
        });
      return column;
    } else {
      return [];
    }
  }

  render() {
    const columns = this.getColumns();
    console.log(`columns =>`, columns);
    console.log(`this.state.posts =>`, this.state.posts);
    // console.log(JSON.stringify(this.state.initial_data));
    return (
      <div>
        <ReactTable
          data={this.state.posts}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          filterable
        />
        <br />
      </div>
    );
  }
}

export default Fetch;

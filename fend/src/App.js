import React from 'react';

import './App.css';
import axios from 'axios'


class Table extends React.Component {
  render() {
    
    return (
      <div>
        <table>
          <tr>
            <th>Current players</th>
            <th>Hole</th>
            <th>Location</th>
          </tr>
          {
            this.props.graph.graph.map(el => {
              return (
                <tr>
                  <td>{el.FirstName} {el.LastName}</td>
                  <td>{el.Hole} </td>
                  <td>{el.HoleLocation}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    )
  }
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      url: 'http://localhost:9000/api/players',
      result: null
    }
  }

  componentDidMount() {
    let it = this.get()
    this.setState({ graph: it })
  }

  get() {
    let URL = this.state.url
    axios.get(URL).then((res) => {
      console.log("it == ", res.data)
      let graph = res.data

      this.setState({ graph })
    })
  }

  render() {
    console.log("state-->", this.state)
    let plyrs = null

    if ((typeof this.state.graph === 'object') && (this.state.graph !== null)) {
      console.log("gr-->", this.state.graph.graph)
      plyrs = <Table graph={this.state.graph}></Table>
    } else {
      plyrs = null
    }
    return (
      <div className="App">
        {plyrs}
      </div>
    );
  }

}



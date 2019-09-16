import React, { Component } from "react";

import Navbar from "./components/Layout/NavBar";
import "materialize-css/dist/css/materialize.min.css";

type State = {
  name: string;
  secondName: String;
};

class App extends Component<{}, State> {
  state: State = {
    name: "",
    secondName: "adasd"
  };
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col s3">
              {/* <div className='input-field col s6'>
                <input value='Alvin' id='first_name2' type='text' className='validate' />
                <label className='active'>Income</label>
              </div> */}
            </div>

            <div className="col s9">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    value={this.state.secondName}
                    id="first_name2"
                    type="text"
                    className="validate"
                  />
                  <label className="active">Name</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

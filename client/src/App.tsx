import React, { Component } from "react";

import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Items from "./containers/Items";

import Spinner from "./components/Spinner";
import "materialize-css/dist/css/materialize.min.css";

interface State {
  name: string;
  userExist: boolean;
}

const validateUser = (): boolean => {
  let userExist: boolean = false;

  if (localStorage.getItem("expense_tracker_user")) {
    userExist = true;
  }
  return userExist;
};
class App extends Component<{}, State> {
  state: State = {
    name: "",
    userExist: validateUser()
  };

  onChange = (event: any) => {
    this.setState({ name: event.target.value });
  };

  saveUser = (e: any) => {
    const { name } = this.state;

    if (name) {
      localStorage.setItem("expense_tracker_user", name);
      this.setState({ userExist: true });
    }
  };
  render() {
    const { userExist } = this.state;
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row"></div>
          <div className="row">
            <Sidebar />

            <div className="col s9">
              <div className="row">
                <Spinner />
                {userExist ? (
                  <Items />
                ) : (
                  <div className="input-field col s6">
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      id="first_name2"
                      type="text"
                      className="validate"
                    />
                    <label className="active">Name</label>
                    <a
                      className="waves-effect waves-light btn"
                      onClick={this.saveUser}
                    >
                      button
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

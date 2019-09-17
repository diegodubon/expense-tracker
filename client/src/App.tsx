import React, { Component } from "react";

import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Items from "./containers/Items";

import Spinner from "./components/Spinner";

import { getUser, postUser } from "./api/user";
import "materialize-css/dist/css/materialize.min.css";
import { any } from "prop-types";

interface State {
  name: string;
  user?: {
    name: string;
    id: number;
  };
  isLoading: boolean;
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
    isLoading: false,
    userExist: validateUser()
  };

  onChange = (event: any) => {
    this.setState({ name: event.target.value });
  };

  saveUser = async (e: any) => {
    const { name } = this.state;

    if (name) {
      try {
        const user = await postUser(name);

        localStorage.setItem("expense_tracker_user", JSON.stringify(user));
        this.setState({
          userExist: true,
          name: user.name,
          user: {
            name: user.name,
            id: user.id
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  componentDidMount() {
    type user = {
      id: number;
      name: string;
    };
    let local = localStorage.getItem("expense_tracker_user");

    if (local) {
      const user: user = JSON.parse(local);
      console.log({ user });
      getUser(user.id)
        .then((user: any) => {
          this.setState({
            user: {
              name: user.name,
              id: user.id
            },
            isLoading: false
          });
          console.log({ user });
        })
        .catch((error: any) => {
          console.log(error);
          this.setState({
            isLoading: false
          });
        });
    }
  }
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

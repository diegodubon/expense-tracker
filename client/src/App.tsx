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

  let username = localStorage.getItem("expense_tracker_user_id");
  let userId = localStorage.getItem("expense_tracker_username");
  if (username && userId) {
    userExist = true;
  }

  console.log({ userExist });
  return userExist;
};
class App extends Component<{}, State> {
  state: State = {
    name: "",

    user: {
      name: "",
      id: 0
    },
    isLoading: false,
    userExist: validateUser()
  };

  onChange = (event: any) => {
    this.setState({ name: event.target.value });
  };

  saveUser = async (e: any) => {
    const { name } = this.state;
    console.log({ state: this.state });
    if (name) {
      try {
        this.setState({ isLoading: true });

        const user = await postUser(name);
        console.log({ user });
        localStorage.setItem("expense_tracker_username", user.name);
        localStorage.setItem("expense_tracker_user_id", user.id);

        this.setState({
          isLoading: false,
          userExist: true,
          name: user.name,
          user: {
            name: user.name,
            id: user.id
          }
        });
      } catch (error) {
        console.log(error);
        this.setState({ isLoading: false });
      }
    }
  };

  componentDidMount() {
    type user = {
      id: number;
      name: string;
    };
    let username = localStorage.getItem("expense_tracker_username");
    let userId = localStorage.getItem("expense_tracker_user_id");

    console.log({ username, userId });
    const user = {
      username,
      id: userId
    };
    console.log({ user });

    if (username && userId) {
      this.setState({ isLoading: true });
      getUser(userId)
        .then((user: any) => {
          this.setState({
            name: user.name,
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
    const { userExist, user, name } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            {user && user.name ? `Welcome : ${name}` : null}
          </div>
          <div className="row">
            <Sidebar />
            <div className="col s9">
              <div className="row">
                {this.state.isLoading ? <Spinner /> : null}
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

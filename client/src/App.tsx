import React, { Component } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Items from "./containers/Items";

import Spinner from "./components/Spinner";
import Form from "./containers/Form";
import Main from "./containers/Home";
import { getUser, postUser } from "./api/user";
import "materialize-css/dist/css/materialize.min.css";
import { any } from "prop-types";

import $ from "jquery";

interface User {
  name?: string;
  id?: string;
}
interface State {
  name: string;
  user?: User;
  userId?: string;
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
    userId: "",
    user: {
      name: "",
      id: ""
    },
    isLoading: false,
    userExist: validateUser()
  };

  onChange = (event: any) => {
    this.setState({ name: event.target.value });
  };

  saveUser = async (e: any) => {
    const { name } = this.state;
    try {
      this.setState({ isLoading: true });

      const user = await postUser(name);

      if (user) {
        localStorage.setItem("expense_tracker_username", user.name);
        localStorage.setItem("expense_tracker_user_id", user.id);

        this.setState({
          isLoading: false,
          userExist: true,
          name: user.name,
          userId: user.id,
          user: {
            name: user.name,
            id: user.id
          }
        });
      }
    } catch (error) {
      this.setState({ isLoading: false });
    }
  };

  setName = (name: string) => {
    this.setState({
      name
    });
  };

  componentDidMount() {
    type user = {
      id: number;
      name: string;
    };
    let username = localStorage.getItem("expense_tracker_username");
    let userId = localStorage.getItem("expense_tracker_user_id");

    const user = {
      username,
      id: userId
    };

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
    const { userExist, user, userId, name, isLoading } = this.state;
    console.log({ userId });
    return (
      <div className="App">
        <Navbar />

        <Router>
          <div className="container">
            <div className="row">
              {user && user.name ? `Welcome : ${name}` : null}
            </div>

            <Sidebar />
            <div className="col s9">
              <Route
                exact
                path="/"
                component={() => (
                  <Main
                    key={name}
                    userId={userId}
                    name={name}
                    setName={this.setName}
                    saveUser={this.saveUser}
                    onChange={this.onChange}
                    userExist={userExist}
                    isLoading={isLoading}
                  />
                )}
              />
              <Route
                exact
                path="/add/expense"
                component={(props: any) => <Form {...props} userId={userId} />}
              />
              <Route
                exact
                path="/add/income"
                component={(props: any) => <Form {...props} userId={userId} />}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

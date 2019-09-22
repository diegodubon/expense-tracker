import React, { Component } from "react";
import Spinner from "../components/Spinner";
import Items from "../containers/Items";
import Sidebar from "../components/Layout/Sidebar";
class Main extends Component<any, any> {
  render() {
    return (
      <div className="row">
        {this.props.isLoading ? <Spinner /> : null}
        {this.props.userExist ? (
          <Items />
        ) : (
          <div className="input-field col s6">
            <input
              onChange={this.props.onChange}
              value={this.props.name}
              id="first_name2"
              type="text"
              className="validate"
            />
            <label className="active">Name</label>
            <a
              className="waves-effect waves-light btn"
              onClick={this.props.saveUser}
            >
              button
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
import Spinner from "../components/Spinner";
import Items from "../containers/Items";
import Sidebar from "../components/Layout/Sidebar";
class Main extends Component<any, any> {
  onChange = (event: any) => {
    console.log(event.target.value);
    this.props.setName(event.target.value);
  };

  render() {
    return (
      <div className="row">
        {this.props.isLoading ? <Spinner /> : null}
        {this.props.userExist ? (
          <Items />
        ) : (
          <div className="input-field col s6">
            <input
              ref={input => input && input.focus()}
              autoFocus
              name="username"
              onChange={this.onChange}
              value={this.props.name}
              id="username"
              type="text"
              // className='validate'
            />
            <label className="active">Name</label>
            <a
              className="waves-effect waves-light btn"
              onClick={this.props.saveUser}
            >
              Save
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Main;

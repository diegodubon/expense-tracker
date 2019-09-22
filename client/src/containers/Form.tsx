import React, { Component } from "react";

class Form extends Component<any, any> {
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <div className="row">
            <div className="input-field col s6">
              <label>Name</label>
              <input type="text" id="input" className="autocomplete" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label>Description</label>
              <input type="text" id="input" className="autocomplete" />
            </div>
          </div>
        </div>
        <div className="input-field col s12">
          <select>
            <option value="" disabled selected>
              Choose your option
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Materialize Select</label>
        </div>
      </div>
    );
  }
}

export default Form;

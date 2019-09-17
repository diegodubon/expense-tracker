import React, { Component } from "react";

interface State {
  items: [];
}
class Items extends Component {
  state: State = {
    items: []
  };
  render() {
    return (
      <div>
        <ul className="collection">
          <li className="collection-item">Alvin</li>
          <li className="collection-item">Alvin</li>
          <li className="collection-item">Alvin</li>
          <li className="collection-item">Alvin</li>
        </ul>
      </div>
    );
  }
}

export default Items;

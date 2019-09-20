import React, { Component } from "react";
import { getItems } from "../api/items";
import Spinner from "../components/Spinner";
import ItemC from "../components/Item";
interface Item {
  id: number;
  name: string;
  amount: number;
  category: string;
  type: string;
  description: string;
}
interface State {
  isLoading: boolean;
  items: Array<Item>;
}
class Items extends Component {
  state: State = {
    isLoading: false,
    items: []
  };

  async componentDidMount() {
    try {
      this.setState({
        isLoading: true
      });
      const data = await getItems();
      console.log({ items: data.items });
      this.setState({
        isLoading: false,
        items: data.items
      });
    } catch (error) {
      this.setState({
        isLoading: false
      });
    }
  }
  render() {
    const { items } = this.state;
    const itemsList = items.map(item => (
      <ItemC
        id={item.id}
        type={item.type}
        amount={item.amount}
        description={item.description}
        name={item.name}
        category={item.category}
      />
    ));
    return (
      <div>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Ammount</th>
                <th>Category</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>{itemsList}</tbody>
          </table>
        )}
      </div>
    );
  }
}

export default Items;

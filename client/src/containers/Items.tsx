import React, { Component } from "react";
import { getItems } from "../api/items";
import Spinner from "../components/Spinner";
import ItemC from "../components/Item";

import { sumBy } from "lodash";
interface Item {
  id: number;
  name: string;
  amount: number;
  category: Category;
  type: string;
  description: string;
  userId: string;
}

interface Category {
  name: string;
}
interface State {
  isLoading: boolean;
  items: Array<Item>;
}
class Items extends Component<any, State> {
  state: State = {
    isLoading: false,
    items: []
  };

  async componentDidMount() {
    try {
      this.setState({
        isLoading: true
      });
      const data = await getItems(this.props.userId);
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
    const itemsListExpenses = items
      .filter(item => item.type === "expense")
      .map(item => (
        <ItemC
          id={item.id}
          type={item.type}
          amount={item.amount}
          description={item.description}
          name={item.name}
          category={item.category}
        />
      ));
    const itemsListIncome = items
      .filter(item => item.type === "income")
      .map(item => (
        <ItemC
          id={item.id}
          type={item.type}
          amount={item.amount}
          description={item.description}
          name={item.name}
          category={item.category}
        />
      ));
    const totalSumIncome = sumBy(
      items.filter(item => item.type === "income"),
      "amount"
    );
    const totalSumExpenses = sumBy(
      items.filter(item => item.type === "expense"),
      "amount"
    );
    return (
      <div>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <div>
            <table>
              <thead>
                Total Expenses
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Type</th>
                </tr>
              </thead>

              <tbody>{itemsListExpenses}</tbody>
              <tfoot>
                <tr>
                  <td>
                    <b>Sum</b>
                  </td>
                  <td>{totalSumExpenses}</td>
                </tr>
              </tfoot>
            </table>
            <table>
              <thead>
                Total Expenses
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Type</th>
                </tr>
              </thead>

              <tbody>{itemsListIncome}</tbody>
              <tfoot>
                <tr>
                  <td>
                    <b>Sum</b>
                  </td>
                  <td>{totalSumIncome}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Items;

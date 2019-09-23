import React, { Component } from "react";

import CategoriesSelect from "../components/Select";

import { getCategories } from "../api/categories";
import { postItem } from "../api/items";

import Spinner from "../components/Spinner";

import { Redirect } from "react-router-dom";
interface Categories {
  name: string;
  id: number;
}

interface FormState {
  name?: string;
  description?: string;
  amount?: number;
  categories?: Array<Categories>;
  isLoading?: boolean;
  categoryId?: string;
  type?: string;
  userId?: number;
}
class Form extends Component<any, FormState> {
  handleType = (path: string): string => {
    let type = "";

    if (path.includes("expense")) {
      type = "expense";
    }

    if (path.includes("income")) {
      type = "income";
    }

    return type;
  };
  state: FormState = {
    name: "",
    description: "",
    amount: 0,
    categories: [],
    categoryId: "",
    userId:
      this.props.userId || localStorage.getItem("expense_tracker_user_id"),
    isLoading: false,
    type: this.handleType(this.props.location.pathname)
  };

  async componentDidMount() {
    const type = this.handleType(this.props.location.pathname);

    try {
      const { categories } = await getCategories(type);

      this.setState({
        categories,
        isLoading: false
      });
    } catch (error) {
      console.log({ error });
      this.setState({
        categories: [],
        isLoading: false
      });
    }
  }
  onSubmit = async (e: any) => {
    e.preventDefault();

    const { name, description, categoryId, amount, type, userId } = this.state;
    try {
      this.setState({
        isLoading: true
      });
      const result = await postItem({
        name,
        description,
        categoryId,
        amount,
        type,
        userId
      });
      console.log({ postItem: result });
      this.setState({
        isLoading: false
      });

      this.props.history.push("/");
    } catch (error) {
      console.log({ error });
      this.setState({
        isLoading: false
      });
    }
  };

  onChangeHandler = (e: any) => {
    const { value, name } = e.target;
    console.log({ value, name });
    this.setState({
      [e.target.name]: value
    });
  };
  render() {
    const { categories, isLoading } = this.state;

    console.log({ state: this.state });
    return (
      <div className="row">
        <div className="col s6">
          <form id="form" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <label>Name</label>
                <input
                  onChange={this.onChangeHandler}
                  value={this.state.name}
                  type="text"
                  id="name"
                  name="name"
                  className="autocomplete"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label>Description</label>
                <input
                  onChange={this.onChangeHandler}
                  value={this.state.description}
                  name="description"
                  type="text"
                  id="input"
                  className="autocomplete"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <label>Amount</label>
                <input
                  onChange={this.onChangeHandler}
                  value={this.state.amount}
                  name="amount"
                  type="number"
                  id="amount"
                  className="autocomplete"
                />
              </div>
            </div>
            <div className="input-field col s6">
              Select Categorie
              <CategoriesSelect
                onChange={this.onChangeHandler}
                categories={categories}
              />
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col s6">
            {isLoading ? (
              <Spinner />
            ) : (
              <button
                className="waves-effect waves-light btn"
                type="submit"
                onSubmit={this.onSubmit}
                form="form"
                value="Submit"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

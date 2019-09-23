import React, { FunctionComponent } from "react";

interface ItemProps {
  id: number;
  name: string;
  description: string;
  category: any;
  type: string;
  amount: number;
}

const Item: FunctionComponent<ItemProps> = ({
  id,
  name,
  category,
  amount,
  type,
  description
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{amount}</td>
      <td>{category.name}</td>
      <td>{type}</td>
    </tr>
  );
};

export default Item;

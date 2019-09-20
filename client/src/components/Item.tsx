import React, { FunctionComponent } from "react";

interface ItemProps {
  id: number;
  name: string;
  description: string;
  category: string;
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
    <div>
      <li className="collection-item"></li>
    </div>
    //    <tr>
    //    <td>Alvin</td>
    //    <td>Eclair</td>
    //    <td>$0.87</td>
    //  </tr>
    //  <tr>
    //    <td>Alan</td>
    //    <td>Jellybean</td>
    //    <td>$3.76</td>
    //  </tr>
    //  <tr>
    //    <td>Jonathan</td>
    //    <td>Lollipop</td>
    //    <td>$7.00</td>
    //  </tr>
  );
};

export default Item;

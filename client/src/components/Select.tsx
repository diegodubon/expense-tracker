import React from "react";

const select = (props: any) => {
  const { categories, onChange } = props;

  const categoriesSelect = categories.map((categorie: any) => {
    return (
      <option key={categorie.id} value={categorie.id}>
        {categorie.name}
      </option>
    );
  });
  return (
    <select name="categoryId" onChange={onChange} className="browser-default">
      {categoriesSelect}
    </select>
  );
};

export default select;

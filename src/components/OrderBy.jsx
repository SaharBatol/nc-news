import React from "react";

const OrderBy = ({ setSelectedOrderBy }) => {
  const orderByHandler = (event) => {
    setSelectedOrderBy(event.target.value);
  };
  return (
    <div className="orderby">
      <select onChange={orderByHandler} id="order">
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </div>
  );
};

export default OrderBy;

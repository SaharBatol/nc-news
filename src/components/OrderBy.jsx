import React from "react";

const OrderBy = ({ selectedOrderBy, setSelectedOrderBy }) => {
  const orderByHandler = () => {
    switch (true) {
      case selectedOrderBy === "ASC":
        setSelectedOrderBy("DESC");
        break;
      case selectedOrderBy === "DESC":
        setSelectedOrderBy("ASC");
        break;
    }
  };
  return (
    <div className="dropdown">
      <button className="dropbutton" onClick={orderByHandler}>
        {selectedOrderBy}
      </button>
    </div>
  );
};

export default OrderBy;

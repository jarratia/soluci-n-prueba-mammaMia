import React from 'react';

const PizzasList = ({ children }) => {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-12 col-sm-3 mb-4">{children}</div>
      </div>
    </div>
  );
};

export default PizzasList;

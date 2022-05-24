import React, { Fragment } from "react";

export const TableRow = ({ clients, loading }) => {
  if (loading) {
    return <nav>Loading...</nav>;
  }

  return (
    <Fragment>
      {clients.map((delivery) => (
        <tr>
          <td>{delivery.delivery_date}</td>
          <td>{delivery.client_name}</td>
          <td>{delivery.quantity}</td>
          <td>{delivery.distance}</td>
        </tr>
      ))}
    </Fragment>
  );
};

export default TableRow;

import React, { Fragment, useEffect, useState } from "react";


const Table = () => {
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    try {
      const response = await fetch("http://localhost:5000/delivery");
      const jsonData = await response.json();

      setClients(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((delivery) => (
            <tr>
              <td>{delivery.date}</td>
              <td>{delivery.client_name}</td>
              <td>{delivery.quantity}</td>
              <td>{delivery.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;

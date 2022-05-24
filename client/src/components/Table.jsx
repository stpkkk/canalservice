import React, { Fragment, useEffect, useState } from "react";
import TableRow from "../components/TableRow";
import Pagination from "./Pagination";

const Table = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(10);

  useEffect(() => {
    const fetchClients = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:5000/delivery");

      const jsonData = await res.json();
      setClients(jsonData);
      setLoading(false);
    };
    fetchClients();
  }, []);

  //Get current clients
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClient = clients.slice(indexOfFirstClient, indexOfLastClient);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
          <TableRow clients={currentClient} loading={loading} />
        </tbody>
      </table>
          <Pagination
            clientsPerPage={clientsPerPage}
            totalClients={clients.length}
			paginate={paginate}
          />
    </Fragment>
  );
};

export default Table;

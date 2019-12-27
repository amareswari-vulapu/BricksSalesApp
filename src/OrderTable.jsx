import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const OrderTable = ({ orders }) => {
  const data = orders;
  const columns = [
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "No of Bricks",
      accessor: "units",
      maxWidth: 150
    },
    {
      Header: "Order Date",
      accessor: "phone"
    }
  ];

  return (
    <div className="col-md-12">
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={5}
        className="-striped -highlight"
      />
    </div>
  );
};

export default OrderTable;

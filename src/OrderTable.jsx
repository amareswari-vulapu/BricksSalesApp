import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const OrderTable = ({ orders, onDelete }) => {
  const data = orders;
  const handleEdit = item => {
    alert(item.name + " has been dispatched");
  };
  const handleDelete = item => {
    onDelete(item);
  };
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
      accessor: "orderDate"
    },
    {
      Header: "Fulfil",
      Cell: row => (
        <div>
          <button onClick={() => handleEdit(row.original)}>Fulfil</button>
        </div>
      )
    },
    {
      Header: "Delete",
      accessor: "delete",
      Cell: row => (
        <img
          src="https://res.cloudinary.com/doayqetsa/image/upload/v1514406449/delete_pfwiu5.png"
          alt="delete button"
          onClick={() => {
            handleDelete(row.original);
          }}
        />
      ),
      maxWidth: 150
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

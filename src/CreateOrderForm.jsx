import React from "react";

const CreateOrderForm = props => {
  const textAreaStyle = {
    overflow: "hidden"
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit();
  };

  const handleChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    props.onChange(inputName, inputValue);
  };

  return (
    <div className="col-md-8 offset-md-2">
      <br />

      <h2 className="col-md-6 offset-md-3"> Create an Order for Bricks </h2>
      <br />
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group row">
          <div className="input-group input-group-lg col-10">
            <span className="input-group-addon" id="sizing-addon1">
              Name
            </span>
            <input
              className="form-control"
              name="name"
              type="text"
              id="example-text-input"
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="input-group input-group-lg col-10">
            <span className="input-group-addon" id="sizing-addon1">
              Number of Bricks
            </span>
            <input
              className="form-control"
              name="units"
              type="number"
              id="example-number-input"
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="input-group input-group-lg col-10">
            <span className="input-group-addon" id="sizing-addon1">
              Order Date
            </span>
            <input
              className="form-control"
              name="orderDate"
              type="date"
              id="example-date-input"
              required
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="offset-md-4">
            <button type="submit" className="btn btn-primary btn-lg">
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateOrderForm;

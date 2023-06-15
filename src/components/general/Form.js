import React, { useState } from "react";

function Form({getData}) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      console.log("Please enter no");
      setAlert(true);
    } else {
      setAlert(false);
      getData(weight,height,name)
      setHeight("")
      setWeight("")
      setName("")
    }
  };

  return (
    <>
      <br />
      <br />
      <form
        onSubmit={onSubmit}
        className="container bg-light d-flex  justify-content-center  flex-column col-5"
      >
        <h2 className=" bg-light d-flex  justify-content-center">BMI Calculation</h2>
        <div className=" mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Height
          </label>
          <input
            type="text"
            className="form-control"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Weight
          </label>
          <input
            type="text"
            className="form-control"
            id="weight"
            required
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      {alert === true ? (
        <div
          class="alert alert-warning container  d-flex  justify-content-center  flex-column"
          role="alert"
        >
          Error occured.
        </div>
      ) : null}

      <br />
      <br />
    </>
  );
}

export default Form;

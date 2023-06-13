import { useState } from "react";

function Form({getData}) {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [alert, setalert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setalert(true);
    } else {
      setalert(false);
      getData(weight, height)
    }
  };

  return (
    <>
      <div className="container ">
        <h2>BMI CALCULATOR</h2>
        <br/>
        <form onSubmit={onSubmit}>
          <div className="form-group col-md-4">
            <label for="name">Weight:</label>
            <input
              type="text"
              className="form-control"
              required
              id="name"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e) => {
                setweight(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-4">
            <label for="email">Height:</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setheight(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <br />
        {alert ? (
          <div class="alert alert-danger" role="alert">
            Error: Numbers Only!
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Form;

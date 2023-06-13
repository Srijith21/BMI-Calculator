import React from "react";

function BmiScore({ bmi, bmitype }) {
  return (
    <>
      <div className="container col-4 bg-primary p-4">
        <div className="container col-4 bg-light m-4">BmiScore {bmi}</div>
        <div className="container col-4 bg-light m-4">Bmi Type {bmitype}</div>
      </div>
    </>
  );
}

export default BmiScore;

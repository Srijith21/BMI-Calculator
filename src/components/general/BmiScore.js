import React from "react";

function BmiScore({ bmi, bmitype, name }) {
 
  return (
    <>
      <div className="container bg-primary p-4 col-4">
        <div className="container  bg-light m-4 col-10">Name {name}</div>
        <div
          className={
            24.9 > bmi
              ? "bg-light container  m-4 col-10 p-5 "
              : "bg-light container text-danger m-4 col-10 p-3 "
          }
        >
          BmiScore {bmi}
        </div>
        <div className="container  bg-light m-4 col-10">Bmi Type {bmitype}</div>
      </div>
    </>
  );
}

export default BmiScore;

import { useState } from "react";
import "./App.css";
import BmiScore from "./components/general/BmiScore";
import BmiList from "./components/general/BmiList";
import Form from "./components/general/Form";

function App() {
  const [bmi, setbmi] = useState("");
  const [bmitype, setbmitype] = useState("not calculated yet");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const OnFormsub = (w, h, n) => {
    console.log(w, h, n);
    let bmipoints = bmicalc(w, h);
    setbmi(bmipoints);

    let person = n;
    setName(person);

    let btype = weightType(bmipoints);
    setbmitype(btype);
    setShow(true);
  };
  const bmicalc = (w, h) => {
    return (w / (h * h)).toFixed(3);
  };

  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Under Weight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesety class 1";
    } else if (34.9 < bmi && bmi < 29.9) {
      return "Obesety class 2";
    } else if (bmi > 34.9) {
      return "Obesety class 3";
    }
  };
  return (
    <>
      <Form getData={OnFormsub} />
      {show && (
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-sm-6 mb-5">
            <BmiScore bmi={bmi} bmitype={bmitype} name={name} />
          </div>
          <div className="col-12 col-sm-6">
            <BmiList />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

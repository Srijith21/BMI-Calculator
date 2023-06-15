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
  const [bmiRange, setBmiRang] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });
  const OnFormsub = (w, h, n) => {
    console.log(w, h, n);
    let b = bmicalc(w, h);
    setbmi(b);

    let person = n;
    setName(person);

    let btype = weightType(b);
    setbmitype(btype);
    setShow(true);
    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    setBmiRang(range);
  };
  const bmicalc = (w, h) => {
    return (w / (h * h)).toFixed(3);
  };
  const calWeight = (b, h) => (b * h * h).toFixed(2);

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
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form getData={OnFormsub} />
        </div>
        {show && (
          <div className="row justify-content-center mt-5">
            <div className=" col-12 col-sm-6 mb-5">
              <BmiScore bmi={bmi} bmitype={bmitype} name={name} />
            </div>
            <div className=" col-12 col-sm-6 ">
              <BmiList bmi={bmi} range={bmiRange} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

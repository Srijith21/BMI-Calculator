import { useState } from "react";
import "./App.css";
import BmiScore from "./components/BmiScore";
import BmiList from "./components/general/BmiList";
import Form from "./components/general/Form";

function App() {
  const [bmi, setbmi] = useState("");
  const [bmitype, setbmitype] = useState("");

  const OnFormsub =(w,h)=>{
    console.log(w,h)
    let bmiscore= bmicalculation(w,h);
    setbmi(bmiscore)
  }
  const bmicalculation =(w,h)=>{
    return (w/(h*h)).toFixed(3)
  }
  return (
    <>
      <Form getData={OnFormsub} />
      <BmiScore bmi={bmi} bmitype={bmitype} />
      <BmiList/>
    </>
  );
}

export default App;

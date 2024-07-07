import { useState } from "react";
import Header from "./components/Hearder";
import InvestmentForm from "./components/InvestmentForm";
import { ResultData } from "./components/ResultData";

function App() {

  const [userData, setUserData] = useState({
    investment: 1000,
    annual_investment: 1000,
    expectedReturn: 5,
    duration: 1,
  });
  function handleChange(event, data) {
    console.log("event", event.target.value);
    setUserData((prev) => {
      const returndata = { ...userData, [data]: +event.target.value };
      return returndata;
    });
  }

  return (
    <>
      {/* <h1>React Investment Calculator</h1> */}
      <Header />
      <InvestmentForm userData={userData} handleChange={handleChange}/>
      <ResultData userData={userData}/>
    </>  
  );
}

export default App

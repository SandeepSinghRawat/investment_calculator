// import { useState } from "react";

export default function InvestmentForm({userData, handleChange}) {
  
  console.log(userData);
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment">INITIAL INVESTMENT</label>
          <input
            onChange={(e)=>{
              console.log("e for event", e);
              return handleChange(e, "investment")}}
            id="investment"
            type="number"
            value={userData.investment}
            required
          />
        </p>
        <p>
          <label htmlFor="annual_investment">ANNUAL INVESTMENT</label>
          <input
            id="annual_investment"
            onChange={(event)=> {handleChange(event, "annual_investment")}}
            type="number"
            required
            value={userData.annual_investment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="return">EXPECTED RETURN</label>
          <input
            id="return"
            onChange={(event) => {handleChange(event, "expectedReturn")}}
            type="number"
            required
            value={userData.expectedReturn}
            />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            id="duration"
            onChange={(event) => {handleChange(event, "duration")}}
            type="number"
            required
            value={userData.duration}
            />
        </p>
      </div>
    </section>
  );
}

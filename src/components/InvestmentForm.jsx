export default function InvestmentForm() {
  return (<main id="user-input ">
    <div className="input-group">
      <label for="investment" >INITIAL INVESTMENT</label>
      <input id="investment" type="number" step="5" />
      <label for="annual_investment" >ANNUAL INVESTMENT</label>
      <input id="annual_investment" type="number" step="5" />
      <label for="return" >EXPECTED RETURN</label>
      <input id="return" type="number" step="5" />
      <label for="duration" >DURATION</label>
      <input id="duration" type="number" step="5" />
    </div>

  </main>)
}
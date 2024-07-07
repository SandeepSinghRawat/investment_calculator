import { calculateInvestmentResults, formatter } from "../util/investment";

export function ResultData({userData}) {
  const resultData = calculateInvestmentResults(userData);
  console.log('resultData',resultData);
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annual_investment;

  return (
    <>
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest = yearData.valueEndOfYear - (yearData.annual_investment * yearData.year) - initialInvestment;
          const totalInvestedAmount = yearData.valueEndOfYear - totalInterest;
          return <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalInvestedAmount)}</td>
          </tr>
        })}
      </tbody>
    </table>
    </>
  );

}
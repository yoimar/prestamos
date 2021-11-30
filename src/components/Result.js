const Result = ({amount, deadline, result}) => {
  return ( <div className="u-full-width resultado">
    <h2>Summary</h2>
    <p>The requested quantity is: $ {amount}</p>
    <p>To pay in: {deadline} Months</p>
    <p>Your monthly payment is: $ {(result/deadline).toFixed(2)}</p>
    <p>Total to pay: $ {result}</p>
  </div> );
}

export default Result;
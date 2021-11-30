import React, {Fragment, useState} from "react";
import calculateQuantity from "../Helper";

const Form = ({amount, setAmount, deadline, setDeadline, setResult, setLoading}) => {

  const [error, setError] = useState(false);

  const calculateLoan = (e) => {
    e.preventDefault();

    if (amount === 0 || deadline === '') {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(() => {
      const total = calculateQuantity(amount, deadline);
      setResult(total);
      setLoading(false);
    }, 3000);

  }

  return (
    <Fragment>
    <form
      onSubmit={calculateLoan}
    >
      <div className="row">
        <div>
          <label>Loan Amount</label>
          <input
            className="u-full-width"
            type="number"
            placeholder="Example: 3000"
            onChange={(e) => setAmount( parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Deadline to Pay</label>
          <select
            className="u-full-width"
            onChange={(e) => setDeadline( parseInt(e.target.value))}
          >
            <option value="">Select</option>
            <option value="3">3 months</option>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
            <option value="24">24 months</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Calculate"
            className="button-primary u-full-width"
          />
        </div>
      </div>
    </form>
    { (error) ? <p className="error">All fields are required</p> : ''}
    </Fragment>
  );
};

export default Form;

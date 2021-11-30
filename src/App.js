import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import React, { useState } from 'react';
import Message from './components/Message';
import Result from './components/Result';
import Spinner from './components/Spinner';

function App() {
  const [amount, setAmount] = useState(0);
  const [deadline, setDeadline] = useState('');
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  let component;
  if (loading) {
    component = <Spinner />
  } else if (result === 0) {
    component = <Message />
  } else {
    component = <Result amount={amount} deadline={deadline} result={result} />
  }
  return (
    <div className="App">
      <Header
        title="Loan Quote"
      />
      <div className="container">
        <Form
          amount={amount}
          setAmount={setAmount}
          deadline={deadline}
          setDeadline={setDeadline}
          setResult={setResult}
          setLoading={setLoading}
        />
        <div className="mensajes">
          {component}
        </div>
      </div>
    </div>
  );
}

export default App;

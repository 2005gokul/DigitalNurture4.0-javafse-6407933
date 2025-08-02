import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <Counter/>
      <CurrencyConvertor />
    </div>
  );
}

export default App;

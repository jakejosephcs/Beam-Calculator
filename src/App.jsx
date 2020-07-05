import React from 'react';
import CalculateResultant from './components/CalculateResultant';

export default function App() {
  return (
    <div className="App">
      <h1>Beam</h1>
      <CalculateResultant fx1={10} x1={0} fx2={15} x2={9} />
    </div>
  );
}

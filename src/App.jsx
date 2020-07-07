import React from 'react';
import CalculateResultant from './components/CalculateResultant';
import FreeBodyDiagram from './components/FreeBodyDiagram';
import Input from './components/Input';

export default function App() {
  const lengthUnit = 'm';
  const forceUnit = 'kN';
  const beamLength = 13;
  const typeOfSupport = [
    {
      type: 'roller',
      location: 2,
    },
    {
      type: 'fixed',
      location: 'left',
    },
    {
      type: 'fixed',
      location: 'right',
    },
    {
      type: 'pin',
      location: 10,
    },
  ];
  const pointLoad = [
    {
      direction: 'up',
      location: 7,
      magnitde: 30,
    },
    {
      direction: 'down',
      location: 5,
      magnitde: 40,
    },
  ];

  return (
    <>
      <div className="App">
        <h1>Beam</h1>
        <Input />
        <CalculateResultant fx1={10} x1={0} fx2={15} x2={9} />
      </div>
      <FreeBodyDiagram
        length={beamLength}
        lengthUnit={lengthUnit}
        forceUnit={forceUnit}
        typeOfSupport={typeOfSupport}
        pointLoad={pointLoad}
      />
    </>
  );
}

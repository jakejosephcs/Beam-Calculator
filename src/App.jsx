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
      magnitude: 30,
    },
    {
      direction: 'down',
      location: 5,
      magnitude: 40,
    },
  ];
  const moment = [
    {
      direction: 'clockwise',
      location: 4,
      magnitude: 20,
    },
    {
      direction: 'counterclockwise',
      location: 12,
      magnitude: 20,
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
        moment={moment}
      />
    </>
  );
}

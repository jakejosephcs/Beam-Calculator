import React from 'react';
import Inputs from './components/containers/inputContainer/Inputs';
import Diagrams from './components/containers/diagramContainer/Diagrams';

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

  const distributedLoad = [
    {
      startLocation: 8,
      endLocation: 11,
      startMagnitude: 10,
      endMagnitude: 30,
    },
  ];

  return (
    <div id="App">
      <Inputs />
      <Diagrams
        length={beamLength}
        lengthUnit={lengthUnit}
        forceUnit={forceUnit}
        typeOfSupport={typeOfSupport}
        pointLoad={pointLoad}
        moment={moment}
        distributedLoad={distributedLoad}
      />
    </div>
  );
}

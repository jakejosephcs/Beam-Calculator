import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = () => {
  const [beamLength, setBeamLength] = useState(0);
  const [beamSupport, setBeamSupport] = useState({
    pin: [],
    roller: [],
    fixed: [],
  });
  const [beamPointLoad, setBeamPointLoad] = useState([
    {
      direction: 0,
      location: 0,
      magnitude: 0,
    },
  ]);
  const [beamMoment, setBeamMoment] = useState([
    {
      direction: 0,
      location: 0,
      magnitude: 0,
    },
  ]);
  const [beamDistributedLoad, setBeamDistributedLoad] = useState([
    {
      direction: 0,
      startLocation: 0,
      endLocation: 0,
      startMagnitude: 0,
      endMagnitude: 0,
    },
  ]);

  const handleAddBeam = () => {
    const beamLength = prompt('Please enter the beam length (m)');
    setBeamLength(beamLength);
  };

  const handleAddSupport = () => {
    const supportType = prompt(
      'Please enter the type of support (Pin, Roller or Fixed)'
    );
    const supportLocation = prompt('Where on the beam is the support located?');
  };

  return (
    <div>
      <button onClick={handleAddBeam} type="button">
        Add Beam
      </button>
      <button onClick={handleAddSupport} type="button">
        Add Support
      </button>
      <button type="button">Add Point Load</button>
      <button type="button">Add Moment</button>
      <button type="button">Add Distributed Load</button>
    </div>
  );
};

Input.propTypes = {};

export default Input;

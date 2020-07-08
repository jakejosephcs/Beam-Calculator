import React from 'react';
import BeamLength from './BeamLength/BeamLength';
import TypeOfSupport from './TypeOfSupport/TypeOfSupport';
import PointLoad from './PointLoad/PointLoad';
import Moment from './Moment/Moment';
import DistributedLoad from './DistributedLoad/DistributedLoad';

const Inputs = (props) => {
  return (
    <div id="InputContainer">
      <h1>Shear Force and Bending Moment Diagram</h1>
      <BeamLength />
      <TypeOfSupport />
      <PointLoad />
      <Moment />
      <DistributedLoad />
      <button id="Solve">solve</button>
    </div>
  );
};

export default Inputs;

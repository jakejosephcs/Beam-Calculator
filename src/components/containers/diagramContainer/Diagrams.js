import React from 'react';
import FreeBodyDiagram from './freeBodyDiagram/FreeBodyDiagram';
import ShearForceDiagram from './shearForceDiagram/ShearForceDiagram';
import BendingMomentDiagram from './bendingMomentDiagram/BendingMomentDiagram';
import PropertiesTable from './propertiesTable/PropertiesTable';

const Diagrams = ({
  length,
  lengthUnit,
  forceUnit,
  typeOfSupport,
  pointLoad,
  moment,
  distributedLoad,
}) => {
  return (
    <div id="DiagramContainer">
      <FreeBodyDiagram
        length={length}
        lengthUnit={lengthUnit}
        forceUnit={forceUnit}
        typeOfSupport={typeOfSupport}
        pointLoad={pointLoad}
        moment={moment}
        distributedLoad={distributedLoad}
      />
      <div id="SFDBMD">
        <ShearForceDiagram />
        <BendingMomentDiagram />
      </div>
      <PropertiesTable />
    </div>
  );
};

export default Diagrams;

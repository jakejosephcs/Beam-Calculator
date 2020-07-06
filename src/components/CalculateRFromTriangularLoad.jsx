import React from 'react';
import PropTypes from 'prop-types';

const CalculateRFromTriangularLoad = ({ fx1T, x1T, fx2T, x2T }) => {
  let fr = null;
  let xr = null;

  if (fx1T === 0 && fx2T !== 0) {
    fr = (fx2T * Math.abs(x1T - x2T)) / 2;
    xr = (2 * Math.abs(x1T - x2T)) / 3;
  }

  if (fx1T !== 0 && fx2T === 0) {
    fr = (fx1T * Math.abs(x1T - x2T)) / 2;
    xr = x1T + Math.abs(x1T - x2T) / 3;
  }

  return (
    <div>
      <p>Resultant force of Traigular Load: {fr}</p>
      <p>Resultant location of Traigular Load: {xr}</p>
    </div>
  );
};

CalculateRFromTriangularLoad.propTypes = {
  fx1T: PropTypes.number.isRequired,
  fx2T: PropTypes.number.isRequired,
  x1T: PropTypes.number.isRequired,
  x2T: PropTypes.number.isRequired,
};

export default CalculateRFromTriangularLoad;

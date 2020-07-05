import React from 'react';
import PropTypes from 'prop-types';

const CalculateRFromDistributedLoad = ({ fx1D, x1D, x2D }) => {
  const fr = fx1D * Math.abs(x1D - x2D);
  const xr = Math.abs(x1D + x2D) / 2;
  return (
    <div>
      <p>Resultant force of Distributed Load: {fr}</p>
      <p>Resultant location of Distributed Load: {xr}</p>
    </div>
  );
};

CalculateRFromDistributedLoad.propTypes = {
  fx1D: PropTypes.string.isRequired,
  x1D: PropTypes.string.isRequired,
  x2D: PropTypes.string.isRequired,
};

export default CalculateRFromDistributedLoad;

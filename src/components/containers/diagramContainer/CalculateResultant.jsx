import React from 'react';
import PropTypes from 'prop-types';
import CalculateRFromDistributedLoad from './CalculateRFromDistributedLoad';
import CalculateRFromTriangularLoad from './CalculateRFromTriangularLoad';
import CalculateRFromCompositeLoad from './CalculateRFromCompositeLoad';

const CalculateResultant = ({ fx1, x1, fx2, x2 }) => (
  <div>
    {fx1 === fx2 && (
      <CalculateRFromDistributedLoad fx1D={fx1} x1D={x1} fx2D={fx2} x2D={x2} />
    )}
    {((fx1 === 0 && fx2 !== 0) || (fx1 !== 0 && fx2 === 0)) && (
      <CalculateRFromTriangularLoad fx1T={fx1} x1T={x1} fx2T={fx2} x2T={x2} />
    )}
    {((fx1 !== 0 && fx2 > fx1) || (fx1 > fx2 && fx2 !== 0)) && (
      <CalculateRFromCompositeLoad fx1C={fx1} x1C={x1} fx2C={fx2} x2C={x2} />
    )}
  </div>
);

CalculateResultant.propTypes = {
  fx1: PropTypes.number.isRequired,
  fx2: PropTypes.number.isRequired,
  x1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
};

export default CalculateResultant;

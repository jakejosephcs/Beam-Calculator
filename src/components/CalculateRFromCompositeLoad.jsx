import React from 'react';
import PropTypes from 'prop-types';
import CalculateRFromDistributedLoad from './CalculateRFromDistributedLoad';
import CalculateRFromTriangularLoad from './CalculateRFromTriangularLoad';

const CalculateRFromCompositeLoad = ({ fx1C, x1C, fx2C, x2C }) => {
  if (fx1C !== 0 && fx2C > fx1C) {
    const fxD = fx1C;
    const fx1T = 0;
    const fx2T = fx2C - fx1C;
    return (
      <div>
        <CalculateRFromDistributedLoad
          fx1D={fxD}
          x1D={x1C}
          fx2D={fxD}
          x2D={x2C}
        />
        <CalculateRFromTriangularLoad
          fx1T={fx1T}
          x1T={x1C}
          fx2T={fx2T}
          x2T={x2C}
        />
      </div>
    );
  }

  if (fx1C > fx2C && fx2C !== 0) {
    const fxD = fx2C;
    const fx2T = 0;
    const fx1T = fx1C - fx2C;
    return (
      <div>
        <CalculateRFromDistributedLoad
          fx1D={fxD}
          x1D={x1C}
          fx2D={fxD}
          x2D={x2C}
        />
        <CalculateRFromTriangularLoad
          fx1T={fx1T}
          x1T={x1C}
          fx2T={fx2T}
          x2T={x2C}
        />
      </div>
    );
  }

  return (
    <div>
      <p>Hi</p>
    </div>
  );
};

CalculateRFromCompositeLoad.propTypes = {
  fx1C: PropTypes.string.isRequired,
  fx2C: PropTypes.string.isRequired,
  x1C: PropTypes.string.isRequired,
  x2C: PropTypes.string.isRequired,
};

export default CalculateRFromCompositeLoad;

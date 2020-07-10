import React, { useState } from 'react';

const BeamLength = () => {
  const [beamLength, setBeamLength] = useState();

  const handleInputBeamLengthChange = (e) => {
    setBeamLength(e.target.value);
  };

  const handleBeamLengthSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="BeamLength">
      Beam Length
      <form onSubmit={handleBeamLengthSubmit}>
        <input
          placeholder="beam length"
          value={beamLength}
          onChange={handleInputBeamLengthChange}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default BeamLength;

import React, { useState } from 'react';

const PointLoad = () => {
  const [pointLoad, setPointLoad] = useState();
  const [pointLoadLocation, setPointLoadLocation] = useState();
  const [pointLoadMagnitude, setPointLoadMagnitude] = useState();
  const [pointLoadType, setPointLoadType] = useState();

  const handlePointLoadSubmit = (e) => {
    e.preventDefault();
    setPointLoad({
      directon: pointLoadType,
      location: parseInt(pointLoadLocation),
      magnitude: parseInt(pointLoadMagnitude),
    });
  };

  console.log(pointLoad);

  return (
    <div id="PointLoad">
      Point Load
      <form onSubmit={handlePointLoadSubmit}>
        <div>
          <input
            type="radio"
            id="down"
            name="load"
            value="down"
            checked={pointLoadType === 'down'}
            onChange={() => setPointLoadType('down')}
          />
          <label for="down">Load down</label>
          <input
            type="radio"
            id="up"
            name="load"
            value="up"
            checked={pointLoadType === 'up'}
            onChange={() => setPointLoadType('up')}
          />
          <label for="up">Load up</label>
        </div>
        <input
          placeholder="load magnitude"
          value={pointLoadLocation}
          onChange={(e) => setPointLoadLocation(e.target.value)}
        />
        <input
          placeholder="load location"
          value={pointLoadMagnitude}
          onChange={(e) => setPointLoadMagnitude(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default PointLoad;

import React, { useState } from 'react';

const DistributedLoad = () => {
  const [distributedLoad, setDistributedLoad] = useState();
  const [
    distributedLoadLocationStart,
    setDistributedLoadLocationStart,
  ] = useState();
  const [
    distributedLoadMagnitudeStart,
    setDistributedLoadMagnitudeStart,
  ] = useState();
  const [
    distributedLoadLocationEnd,
    setDistributedLoadLocationEnd,
  ] = useState();
  const [
    distributedLoadMagnitudeEnd,
    setDistributedLoadMagnitudeEnd,
  ] = useState();
  const [distributedLoadType, setDistributedLoadType] = useState();

  const handleDistributedLoadSubmit = (e) => {
    e.preventDefault();
    setDistributedLoad({
      startLocation: parseInt(distributedLoadLocationStart),
      endLocation: parseInt(distributedLoadLocationEnd),
      startMagnitude: parseInt(distributedLoadMagnitudeStart),
      endMagnitude: parseInt(distributedLoadMagnitudeEnd),
      type: distributedLoadType,
    });
  };

  console.log(distributedLoad);

  return (
    <div id="DistributedLoad">
      Distributed Load
      <form onSubmit={handleDistributedLoadSubmit}>
        <div>
          <input
            type="radio"
            id="down"
            name="load"
            value="down"
            checked={distributedLoadType === 'down'}
            onChange={() => setDistributedLoadType('down')}
          />
          <label for="down">Load down</label>
          <input
            type="radio"
            id="up"
            name="load"
            value="up"
            checked={distributedLoadType === 'up'}
            onChange={() => setDistributedLoadType('up')}
          />
          <label for="up">Load up</label>
        </div>
        <input
          placeholder="start location"
          value={distributedLoadLocationStart}
          onChange={(e) => setDistributedLoadLocationStart(e.target.value)}
        />
        <input
          placeholder="end location"
          value={distributedLoadLocationEnd}
          onChange={(e) => setDistributedLoadLocationEnd(e.target.value)}
        />
        <input
          placeholder="start magnitude"
          value={distributedLoadMagnitudeStart}
          onChange={(e) => setDistributedLoadMagnitudeStart(e.target.value)}
        />
        <input
          placeholder="end magnitude"
          value={distributedLoadMagnitudeEnd}
          onChange={(e) => setDistributedLoadMagnitudeEnd(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default DistributedLoad;

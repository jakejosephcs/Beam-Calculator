import React, { useState } from 'react';

const Moment = () => {
  const [moment, setMoment] = useState();
  const [momentLocation, setMomentLocation] = useState();
  const [momentMagnitude, setMomentMagnitude] = useState();
  const [momentType, setMomentType] = useState();

  const handleMomentSubmit = (e) => {
    e.preventDefault();
    setMoment({
      directon: momentType,
      location: parseInt(momentLocation),
      magnitude: parseInt(momentMagnitude),
    });
  };

  return (
    <div id="Moment">
      Moment
      <form onSubmit={handleMomentSubmit}>
        <div>
          <input
            type="radio"
            id="positive"
            name="moment"
            value="positive"
            checked={momentType === 'positive'}
            onChange={() => setMomentType('positive')}
          />
          <label for="positive">postive moment</label>
          <input
            type="radio"
            id="negative"
            name="moment"
            value="negative"
            checked={momentType === 'negative'}
            onChange={() => setMomentType('negative')}
          />
          <label for="negative">negative moment</label>
        </div>
        <input
          placeholder="moment magnitude"
          value={momentLocation}
          onChange={(e) => setMomentLocation(e.target.value)}
        />
        <input
          placeholder="moment location"
          value={momentMagnitude}
          onChange={(e) => setMomentMagnitude(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Moment;

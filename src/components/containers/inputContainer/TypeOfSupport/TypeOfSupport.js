import React, { useState } from 'react';

const TypeOfSupport = () => {
  const [locationOfSupport, setLocationOfSupport] = useState('');
  const [typeOfSupport, setTypeOfSupport] = useState('');
  const [supports, setSupports] = useState([]);

  const handleTypeOfSupportSubmit = (e) => {
    e.preventDefault();
    setSupports(
      supports.concat({
        type: `${typeOfSupport}`,
        location: locationOfSupport,
      })
    );
    console.log(supports);
  };

  const handleInputLocationChange = (e) => {
    setLocationOfSupport(e.target.value);
  };

  const setSupprt = (supportType) => {
    setTypeOfSupport(supportType);
  };

  return (
    <div id="TypeOfSupport">
      Type of Support
      <form onSubmit={handleTypeOfSupportSubmit}>
        <div>
          <input
            type="radio"
            id="pin"
            name="support"
            value="pin"
            checked={typeOfSupport === 'pin'}
            onChange={() => setSupprt('pin')}
          />
          <label for="pin">Pin Support</label>
          <input
            type="radio"
            id="roller"
            name="support"
            value="roller"
            checked={typeOfSupport === 'roller'}
            onChange={() => setSupprt('roller')}
          />
          <label for="roller">Roller Support</label>
          <input
            type="radio"
            id="fixed"
            name="support"
            value="fixed"
            checked={typeOfSupport === 'fixed'}
            onChange={() => setSupprt('fixed')}
          />
          <label for="fixed">Fixed Support</label>
        </div>
        <input
          placeholder="support location"
          value={locationOfSupport}
          onChange={handleInputLocationChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TypeOfSupport;

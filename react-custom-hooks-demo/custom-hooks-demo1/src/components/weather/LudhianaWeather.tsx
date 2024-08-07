import React from 'react';
import WeatherTable from './WeatherTable';

const LudhianaWeather: React.FC = () => {
  return (
    <WeatherTable
      city="Ludhiana"
      lat={30.9}
      lng={75.85}
      updateFrequencySec={60}
      timezone="Asia/Kolkata"
    />
  );
};

export default LudhianaWeather;

import React, { useState, useEffect } from 'react';
import ldClient from './ldClient';

function App() {
  const [buttonColor, setButtonColor] = useState('#007bff');

  useEffect(() => {
    ldClient.on('ready', () => {
      const flagValue = ldClient.variation('button-color-change', false);
      setButtonColor(flagValue ? '#28a745' : '#007bff');
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div>
        <img src="london.jpeg" alt="Region" style={{ width: '300px', height: '200px', margin: '10px', borderRadius: '10px' }} />
      </div>
      <h1>Explore LaunchDarkly</h1>
      <p>LaunchDarkly is a feature management platform that enables teams to build better software, faster, with feature flags to help roll out new features safely and securely.</p>
      <button style={{ backgroundColor: buttonColor, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Learn More
      </button>
      <div>
        <img src="launchdarkly-space.png" alt="LD Logo" style={{ width: '300px', height: '200px', margin: '10px', borderRadius: '10px' }} />
      </div>
    </div>
  );
}

export default App;


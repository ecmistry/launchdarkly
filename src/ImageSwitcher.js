import React, { useState, useEffect } from 'react';
import ldClient from './ldClient';

const ImageSwitcher = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchFlag = async () => {
      if (ldClient) {
        const region = ldClient.variation('test-region', 'us'); // Default to 'us' if the flag is not found
        console.log(region)
        setImage(region === 'uk' ? 'london.jpeg' : 'san-fran.png');
      }
    };

    fetchFlag();
  }, [ldClient]);

  return (
    <div>
      {image && <img src={image} alt="Region Specific" />}
    </div>
  );
};

export default ImageSwitcher;
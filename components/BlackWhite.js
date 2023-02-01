import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const BlackWhite = ({ src, alt, delay = 200 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isColor, setIsColor] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isHovered && !isColor) {
      timeoutId = setTimeout(() => {
        setIsColor(true);
      }, delay);
    } else if (!isHovered && isColor) {
      clearTimeout(timeoutId);
      setIsColor(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isHovered, isColor, delay]);

  return (
    <Image
      src={src}
      alt={alt}
      width={250}
        height={250}
      style={{ filter: isColor ? 'none' : 'grayscale(100%)', cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default BlackWhite;

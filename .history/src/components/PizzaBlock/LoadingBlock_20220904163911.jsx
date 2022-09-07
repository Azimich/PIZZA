import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader 
      className="pizza-block"
      speed={1}
      width={280}
      height={418}
      viewBox="0 0 280 418"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
    <circle cx="121" cy="109" r="109" /> 
    <rect x="0" y="231" rx="4" ry="4" width="245" height="30" /> 
    <rect x="0" y="273" rx="2" ry="2" width="245" height="86" /> 
    <rect x="130" y="371" rx="20" ry="20" width="117" height="35" /> 
    <rect x="0" y="376" rx="4" ry="4" width="79" height="25" />
  </ContentLoader>
  );
}

export default LoadingBlock
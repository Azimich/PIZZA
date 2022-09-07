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
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
  >
    <circle cx="132" cy="109" r="109" /> 
    <rect x="0" y="236" rx="4" ry="4" width="280" height="25" /> 
    <rect x="163" y="375" rx="20" ry="20" width="117" height="35" /> 
    <rect x="0" y="380" rx="4" ry="4" width="101" height="30" /> 
    <rect x="0" y="274" rx="4" ry="4" width="280" height="85" />
  </ContentLoader>
  );
}

export default LoadingBlock
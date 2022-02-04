import React from "react";
import ContentLoader from "react-content-loader";

const LoadingSkeleton = (props) => (
  <ContentLoader
    speed={1}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="-5" rx="0" ry="0" width="111" height="142" />
    <rect x="130" y="3" rx="0" ry="0" width="216" height="21" />
    <rect x="131" y="35" rx="0" ry="0" width="216" height="21" />
    <rect x="131" y="68" rx="0" ry="0" width="216" height="21" />
    <rect x="132" y="100" rx="0" ry="0" width="216" height="21" />
  </ContentLoader>
);

export default LoadingSkeleton;

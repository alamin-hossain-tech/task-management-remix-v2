import * as React from "react";
const DragIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <g fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx={20} cy={8} r={1} transform="rotate(-180 20 8)" />
      <circle cx={20} cy={16} r={1} transform="rotate(-180 20 16)" />
      <circle cx={12} cy={8} r={1} transform="rotate(-180 12 8)" />
      <circle cx={12} cy={16} r={1} transform="rotate(-180 12 16)" />
      <circle cx={4} cy={8} r={1} transform="rotate(-180 4 8)" />
      <circle cx={4} cy={16} r={1} transform="rotate(-180 4 16)" />
    </g>
  </svg>
);
export default DragIcon;

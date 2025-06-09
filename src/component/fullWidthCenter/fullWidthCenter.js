import React from "react";

const FullWidthCenter = ({ children }) => {

  return (
    <div style={{
               width: "100%",
               display: "flex",
               justifyContent: "center",
             }} >
      {children}
    </div>
  );
}

export default FullWidthCenter;

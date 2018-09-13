import * as React from "react";

export const BottomBarLocator: React.StatelessComponent = props => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "auto",
        bottom: 16
      }}
    >
      {props.children}
    </div>
  );
};

import * as React from "react";

export const RootContainer: React.StatelessComponent = props => {
  return (
    <div
      style={{
        padding: "0 12px"
      }}
    >
      {props.children}
    </div>
  );
};

import * as React from "react";

export const RootContainer: React.StatelessComponent = props => {
  return (
    <div
      style={{
        padding: "6px 12px"
      }}
    >
      {props.children}
    </div>
  );
};

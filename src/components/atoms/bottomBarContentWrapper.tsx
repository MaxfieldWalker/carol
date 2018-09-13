import * as React from "react";
import { CornerRadius, Color } from "../theme";

export const BottomBarUpperContentWrapper: React.StatelessComponent = props => {
  return (
    <div
      style={{
        height: 100,
        backgroundColor: Color.white,
        position: "relative",
        overflow: "scroll",
        borderTopLeftRadius: CornerRadius.mid,
        borderTopRightRadius: CornerRadius.mid,
        // borderRadius: CornerRadius.mid,
        // borderBottomLeftRadius: CornerRadius.mid,
        // borderBottomRightRadius: CornerRadius.mid,
        // marginBottom: -CornerRadius.mid,
        zIndex: 1,
        padding: `${CornerRadius.mid + -4}px ${CornerRadius.mid + 4}px`
      }}
    >
      {props.children}
    </div>
  );
};

export const BottomBarLowerContentWrapper: React.StatelessComponent = props => {
  return (
    <div
      style={{
        backgroundColor: Color.foreground,
        position: "relative",
        // paddingTop: CornerRadius.mid,
        borderBottomLeftRadius: CornerRadius.mid,
        borderBottomRightRadius: CornerRadius.mid,
        display: "flex",
        justifyContent: "flex-end",
        padding: `9px ${CornerRadius.mid + 4}px`
      }}
    >
      {props.children}
    </div>
  );
};

import * as React from "react";
import { Loader } from "./loader";
import { Color } from "../theme";

export const LoadingCircle: React.StatelessComponent = props => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 24
    }}
  >
    <Loader color={Color.foreground} size={42} />
    <div
      style={{
        marginTop: 12
      }}
    >
      読み込み中...
    </div>
  </div>
);

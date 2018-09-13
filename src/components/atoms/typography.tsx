import * as React from "react";
import { Color } from "../theme";

interface Props {
  style?: React.CSSProperties;
}

const commonStyle: React.CSSProperties = {
  marginLeft: 6,
  color: Color.foreground
};

export const UIHeader: React.StatelessComponent<Props> = props => (
  <h1
    style={{
      ...commonStyle,
      fontSize: 48,
      fontWeight: 700,
      ...props.style
    }}
  >
    {props.children}
  </h1>
);

export const UISubheader: React.StatelessComponent<Props> = props => (
  <h2
    style={{
      ...commonStyle,
      color: Color.black,
      fontSize: 32,
      marginTop: 18,
      marginBottom: 12,
      ...props.style
    }}
  >
    {props.children}
  </h2>
);

export const UILargeItemName: React.StatelessComponent<Props> = props => (
  <p
    style={{
      fontSize: 24,
      color: Color.black,
      fontWeight: "bold",
      letterSpacing: "0.1em",
      ...props.style
    }}
  >
    {props.children}
  </p>
);

export const UIItemName: React.StatelessComponent<Props> = props => (
  <p
    style={{
      fontSize: 18,
      color: Color.black,
      fontWeight: "bold",
      letterSpacing: "0.1em",
      ...props.style
    }}
  >
    {props.children}
  </p>
);

export const BodyText: React.StatelessComponent<Props> = props => (
  <p
    style={{
      fontSize: 18,
      color: Color.black,
      lineHeight: "1.5em"
    }}
  >
    {props.children}
  </p>
);

export const CaptionText: React.StatelessComponent<Props> = props => (
  <div
    style={{
      fontSize: 16,
      color: Color.black,
      lineHeight: "1.0em",
      ...props.style
    }}
  >
    {props.children}
  </div>
);

import * as React from "react";
import { Color } from "../theme";

interface Props {
  style?: React.CSSProperties;
}

export const UIHeader: React.StatelessComponent<Props> = props => (
  <h1
    style={{
      fontSize: 48,
      color: Color.black,
      fontWeight: 700
    }}
  >
    {props.children}
  </h1>
);

export const UISubheader: React.StatelessComponent<Props> = props => (
  <h2
    style={{
      fontSize: 36,
      color: Color.black
    }}
  >
    {props.children}
  </h2>
);

export const UIItemName: React.StatelessComponent<Props> = props => (
  <p
    style={{
      fontSize: 18,
      color: Color.black,
      fontWeight: "bold",
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
  <p
    style={{
      fontSize: 14,
      color: Color.black,
      lineHeight: "1.0em"
    }}
  >
    {props.children}
  </p>
);

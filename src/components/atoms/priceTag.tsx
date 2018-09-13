import * as React from "react";
import styled from "styled-components";
import { Color } from "../theme";

interface Props {
  price: number;
  style?: React.CSSProperties;
}

const Price = styled.span`
  font-size: 24px;
  color: ${Color.orange};
`;

const Yen = styled.span`
  font-size: 20px;
  color: ${Color.black};
  margin-left: 2px;
`;

export const PriceTag: React.StatelessComponent<Props> = props => {
  const { price, style } = props;
  const format = price.toLocaleString();

  return (
    <div style={style}>
      <Price>{format}</Price>
      <Yen>円</Yen>
    </div>
  );
};

import * as React from "react";
import styled from "styled-components";
import { Color } from "../theme";

interface Props {
  price: number;
}

const Price = styled.span`
  font-size: 36px;
  color: ${Color.orange};
`;

const Yen = styled.span`
  font-size: 20px;
  color: ${Color.black};
`;

export const PriceTag: React.StatelessComponent<Props> = props => {
  const format = props.price.toLocaleString();

  return (
    <div>
      <Price>{format}</Price>
      <Yen>円</Yen>
    </div>
  );
};

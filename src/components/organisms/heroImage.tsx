import * as React from "react";
import styled from "styled-components";
import ImagePlaceholder from "../atoms/imagePlaceholder";
import { Color } from "../theme";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 400px;
`;

const CatchPhrase = styled.h2`
  color: ${Color.white};
  font-size: 42px;
  font-weight: bold;
  text-shadow: rgba(0, 0, 0, 0.3) -4px 4px 8px;
  text-align: right;
`;

export class HeroImage extends React.Component {
  render() {
    return (
      <Wrapper>
        <img
          src="/images/hero.png"
          height="400"
          width="100%"
          style={{ position: "absolute", opacity: 0.9, objectFit: "cover" }}
        />
        <div style={{ position: "absolute", right: 16, bottom: 16 }}>
          <CatchPhrase
            style={{
              fontSize: 48,
              marginRight: -4
            }}
          >
            おうちで飲める。
          </CatchPhrase>
          <CatchPhrase
            style={{
              fontSize: 28
            }}
          >
            スピーディーにお届け。
          </CatchPhrase>
        </div>
      </Wrapper>
    );
  }
}

import * as React from "react";
import styled from "styled-components";
import ImagePlaceholder from "../atoms/imagePlaceholder";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 400px;
`;

export class HeroImage extends React.Component {
  render() {
    return (
      <Wrapper>
        <img
          src="/images/hero.png"
          height="400"
          width="100%"
          style={{
            position: "absolute",
            opacity: 0.9,
            objectFit: "cover"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 16,
            bottom: 16
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: 42,
              fontWeight: "bold",
              textShadow: "-2px 2px 3px rgba(0,0,0,0.3)"
            }}
          >
            おうちで飲める。 <br />
            スピーディーにお届け。
          </h2>
        </div>
      </Wrapper>
    );
  }
}

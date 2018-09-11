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
        <ImagePlaceholder
          style={{
            position: "absolute"
          }}
          height={400}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0
          }}
        >
          <h2
            style={{
              color: "#fff",
              fontSize: 48,
              fontWeight: "bold"
            }}
          >
            お酒のハードルを <br />
            グッと下げます
          </h2>
        </div>
      </Wrapper>
    );
  }
}

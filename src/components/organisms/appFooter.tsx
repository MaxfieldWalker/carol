import * as React from "react";
import styled from "styled-components";
import { Color } from "../theme";

const Wrapper = styled.footer`
  bottom: 0;
  height: 5em;
  position: absolute;
  width: 100vw;
  height: auto;
  background-color: ${Color.underline};
  color: ${Color.foreground};
`;

export default class AppFooter extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>
          <ul>
            <li>おさけフレンズについて</li>
            <li>ヘルプ&amp;ガイド</li>
          </ul>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: Color.lightgray,
            color: Color.white
          }}
        >
          <p>
            おさけは二十歳になってから。
            <br />
            未成年の飲酒は法律で禁止されています。
          </p>
        </div>
      </Wrapper>
    );
  }
}

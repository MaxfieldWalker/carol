import * as React from "react";
import styled from "styled-components";
import { Color } from "../theme";

const Wrapper = styled.footer`
  width: 100vw;
  background-color: ${Color.underline};
  color: ${Color.foreground};
`;

export default class AppFooter extends React.Component {
  render() {
    const ulStyle: React.CSSProperties = {
      margin: " 0"
    };

    const liStyle: React.CSSProperties = {
      padding: "4px 0"
    };

    return (
      <Wrapper>
        <div
          style={{
            padding: "12px 0"
          }}
        >
          <ul
            style={{
              margin: 0
            }}
          >
            <li style={liStyle}>おさけフレンズについて</li>
            <li style={liStyle}>ヘルプ&amp;ガイド</li>
          </ul>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: Color.lightgray,
            color: Color.white,
            padding: "12px 20px",
            fontSize: "12px"
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

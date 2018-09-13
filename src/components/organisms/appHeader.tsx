import * as React from "react";
import styled from "styled-components";
import { Color } from "../theme";
import { RouterProps } from "../../util/router";
import { withRouter, RouteComponentProps } from "react-router";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  background-color: ${Color.background};
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px 4px #00000020;
`;

const LeftContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const RightContentWrapper = styled.div`
  width: 100;
  display: flex;
  align-items: center;
`;

const AppName = styled.span`
  font-size: 24px;
  letter-spacing: 0.1em;
  color: ${Color.foreground};
  background: linear-gradient(transparent 40%, ${Color.underline} 40%);
`;

interface Props {}

type P = Props & RouterProps & RouteComponentProps<Props>;

class AppHeader2 extends React.Component<P> {
  onAppNameClick() {
    history;
    this.props.history.push("/");
  }

  render() {
    return (
      <Wrapper>
        <div onClick={this.onAppNameClick.bind(this)}>
          <AppName>おさけフレンズ</AppName>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0
          }}
        >
          <div
            style={{
              marginRight: 16
            }}
          >
            <img
              src="/images/avatar.jpg"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: `1px solid ${Color.foreground}`
              }}
            />
          </div>
        </div>
      </Wrapper>
    );
  }
}

export const AppHeader = withRouter(AppHeader2);

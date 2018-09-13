import * as React from "react";
import { AppHeader } from "../components/organisms/appHeader";
import { UIHeader } from "../components/atoms/typography";
import { OmakaseItem } from "../components/organisms/omakaseItem";
import { LoadingCircle } from "../components/atoms/loadingCircle";
import AppFooter from "../components/organisms/appFooter";
import { OmakaseSet } from "../api/types";
import { ApiClient } from "../api/apiClient";
import styled from "styled-components";
import { dummySakeData, dummyOmakaseSetData } from "../data/sake";

interface Props {}

interface State {
  items: OmakaseSet[];
  loaded: boolean;
}

const RootContainer = styled.div`
  padding: 0 12px;
`;

export default class OmakaseScreen extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      items: [],
      loaded: false
    };
  }

  async componentDidMount() {
    const client = new ApiClient();
    // const data = await client.getOmakaseSets("2998787");

    this.setState({
      // items: data.sets,
      items: dummyOmakaseSetData,
      loaded: true
    });
  }

  render() {
    const { items, loaded } = this.state;

    return (
      <div>
        <AppHeader />
        <RootContainer>
          <UIHeader style={{ marginTop: 20, marginBottom: 6 }}>
            おまかせ
          </UIHeader>
          <div />
          {loaded ? (
            <div>
              {items.map((item: OmakaseSet, index: number) => (
                <OmakaseItem
                  key={index}
                  {...item}
                  style={{
                    marginBottom: 24
                  }}
                  onClick={() => alert("TODO: モーダルを出すようにする")}
                />
              ))}
            </div>
          ) : (
            <LoadingCircle />
          )}
        </RootContainer>
      </div>
    );
  }
}

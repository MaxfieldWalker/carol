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
import { RootContainer } from "../components/atoms/rootContainer";
import { ModalContainer } from "../components/atoms/modalContainer";
import { SakeDetailModal } from "../components/templates/sakeDetailModal";
import { OmakaseSetDetailModal } from "../components/templates/omakaseSetDetailModal";

interface Props {}

interface State {
  items: OmakaseSet[];
  loaded: boolean;
  isModalVisible: boolean;
  focusedItem?: OmakaseSet;
}

export default class OmakaseScreen extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.state = {
      items: [],
      loaded: false,
      isModalVisible: false
    };
  }

  async componentDidMount() {
    const client = new ApiClient();
    const data = await client.getOmakaseSets("2345678");

    console.log("data from server:");
    console.log(data);

    this.setState({
      items: data.sets,
      loaded: true
    });
  }

  openModal() {
    this.setState({
      isModalVisible: true
    });
  }

  closeModal() {
    this.setState({
      isModalVisible: false
    });
  }

  onOmakaseItemClicked(omakase: OmakaseSet) {
    this.setState({
      focusedItem: omakase
    });
    this.openModal();
  }

  onOrderButtonClicked() {
    const omakase = this.state.focusedItem!!;
  }

  render() {
    const { items, loaded, isModalVisible, focusedItem } = this.state;

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
              {items.map((omakase: OmakaseSet, index: number) => (
                <OmakaseItem
                  key={index}
                  {...omakase}
                  style={{
                    marginBottom: 24
                  }}
                  onClick={() => this.onOmakaseItemClicked(omakase)}
                />
              ))}
            </div>
          ) : (
            <LoadingCircle />
          )}
        </RootContainer>

        <ModalContainer
          visible={isModalVisible}
          onClose={this.closeModal.bind(this)}
        >
          <OmakaseSetDetailModal
            {...focusedItem!!}
            orderButtonClicked={this.onOrderButtonClicked.bind(this)}
          />
        </ModalContainer>
      </div>
    );
  }
}

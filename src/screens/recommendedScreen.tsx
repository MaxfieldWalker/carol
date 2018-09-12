import * as React from "react";
import { AppHeader } from "../components/organisms/appHeader";
import { UIHeader } from "../components/atoms/typography";
import { Sake } from "../api/types";
import { SakeItem } from "../components/organisms/sakeItem";
import { SakeDetailModal } from "../components/templates/sakeDetailModal";
import SelectedItemsBar from "../components/organisms/selectedItemsBar";
import { dummySakeData } from "../data/sake";
import { RouterProps } from "react-router";
const Rodal = require("rodal").default;

interface P {
  userName?: string;
}

type Props = P & RouterProps;

interface State {
  isModalVisible: boolean;
  focusedItem?: Sake;
  selectedItems: Sake[];
}

export default class RecommendedScreen extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);

    this.state = {
      isModalVisible: false,
      focusedItem: undefined,
      selectedItems: []
    };
  }

  onSakeItemClicked(sake: Sake) {
    console.log(sake);
    this.setState({
      focusedItem: sake
    });
    this.openModal();
  }

  openModal() {
    this.setState({ isModalVisible: true });
  }

  closeModal() {
    this.setState({ isModalVisible: false });
  }

  onSelectButtonClicked(sake: Sake) {
    const { selectedItems } = this.state;

    const items = selectedItems.slice();
    const index = items.findIndex(x => x.id === sake.id);

    if (index >= 0) {
      // 削除しています
      items.splice(index, 1);
    } else {
      items.push(sake);
    }

    this.setState({
      selectedItems: items
    });

    setTimeout(() => {
      // モーダルを閉じる
      this.closeModal();
    }, 300);
  }

  onNextButtonClick() {
    this.props.history.push("/order/confirm");
  }

  render() {
    const { userName } = this.props;
    const { isModalVisible, focusedItem, selectedItems } = this.state;

    const sake = focusedItem!!;
    const isCurrentFocusedItemSelected =
      selectedItems.findIndex(x => x.id === sake.id) >= 0;

    return (
      <div>
        <AppHeader />
        <div>
          <UIHeader>
            {userName ? userName + "さんへのおすすめ" : "あなたへのおすすめ"}
          </UIHeader>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {dummySakeData.map((sake: Sake, index: number) => (
              <SakeItem
                key={index}
                {...sake}
                displayName={sake.name}
                style={{
                  marginRight: 8,
                  marginBottom: 12
                }}
                isSelected={selectedItems.findIndex(x => x.id === sake.id) >= 0}
                onClick={() => this.onSakeItemClicked(sake)}
              />
            ))}
          </div>
        </div>

        <Rodal
          visible={isModalVisible}
          onClose={this.closeModal.bind(this)}
          width={90}
          height={80}
          measure="%"
          style={{
            padding: 0
          }}
        >
          <SakeDetailModal
            {...sake}
            isSelected={isCurrentFocusedItemSelected}
            onSelectButtonClicked={() => this.onSelectButtonClicked(sake)}
          />
        </Rodal>
        <SelectedItemsBar
          style={{
            position: "fixed",
            bottom: 0,
            display: "block"
          }}
          items={selectedItems}
          onNextButtonClicked={this.onNextButtonClick.bind(this)}
        />
      </div>
    );
  }
}

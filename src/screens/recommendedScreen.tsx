import * as React from "react";
import { AppHeader } from "../components/organisms/appHeader";
import AppFooter from "../components/organisms/appFooter";
import { UIHeader } from "../components/atoms/typography";
import { Sake } from "../api/types";
import { SakeItem } from "../components/organisms/sakeItem";
import { SakeDetailModal } from "../components/templates/sakeDetailModal";
const Rodal = require("rodal").default;

interface Props {
  userName?: string;
}

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

  render() {
    const { userName } = this.props;
    const { isModalVisible, focusedItem, selectedItems } = this.state;

    const dummyData: Sake[] = Array(7)
      .fill(0)
      .map((_, index) => ({
        id: index,
        name: "モスコミュール",
        description:
          "モスコー・ミュールとはオールデイカクテルとして、非常にメジャーなスタンダードカクテルの一つ。モスコー・ミュールとは「モスクワのラバ」という意味があり、「ラバに蹴飛ばされたように」効いてくる、強いウォッカベースのカクテルであることを表す。なお名称にクーラーとは付いていないが、クーラーの一種である。",
        price: 289,
        imageUrl: ""
      }));

    const sake = focusedItem!!;
    const isCurrentFocusedItemSelected =
      selectedItems.findIndex(x => x.name === sake.name) >= 0;

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
            {dummyData.map((sake: Sake, index: number) => (
              <SakeItem
                key={index}
                {...sake}
                displayName={sake.name}
                style={{
                  marginRight: 8,
                  marginBottom: 12
                }}
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
            onSelectButtonClicked={() => console.log("select clicked")}
          />
        </Rodal>
        <AppFooter />
      </div>
    );
  }
}

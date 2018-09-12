import * as React from "react";
import { UIButton } from "../atoms/buttons";

interface Props {
  selectedItems: string[];
  onNextButtonClicked: () => void;
  isNextButtonEnabled: boolean;
}

export default class SelectBottomBar extends React.Component<Props> {
  render() {
    const {
      selectedItems,
      onNextButtonClicked,
      isNextButtonEnabled
    } = this.props;

    return (
      <div
        style={{
          display: "flex"
        }}
      >
        <div style={{ flex: 1 }}>
          {selectedItems.map((name: string, index: number) => (
            <div key={index}>{name}</div>
          ))}
        </div>
        <div
          style={{
            width: "auto"
          }}
        >
          <UIButton
            primary
            onClick={onNextButtonClicked}
            disabled={selectedItems.length == 0}
          >
            次へ >
          </UIButton>
        </div>
      </div>
    );
  }
}

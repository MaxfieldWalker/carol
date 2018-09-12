import * as React from "react";
import { Sake } from "../..//api/types";
import styled from "styled-components";
import { Color } from "../theme";
import { SelectedSakeItem } from "./selectedSakeItem";
import { UIButton } from "../atoms/buttons";

interface Props {
  items: Sake[];
  style?: React.CSSProperties;
  onNextButtonClicked?: () => void;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 8px;
`;

export default class SelectedItemsBar extends React.Component<Props> {
  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.items.length !== this.props.items.length) {
      console.log(this.props.items);
    }
  }

  render() {
    const { items, style, onNextButtonClicked } = this.props;

    const selectedItemsCount = items.length;
    const array = Array.from({ length: 5 }, (_, k) => k).slice(
      selectedItemsCount
    );

    console.log(selectedItemsCount);

    const circleSize = 32;

    const commonItemStyle: React.CSSProperties = {
      margin: "4px",
      flex: 1
    };

    return (
      <Wrapper style={style}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: Color.white,
            borderRadius: 16,
            boxShadow: "0 10px 10px 10px #eee",
            display: "flex"
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1
            }}
          >
            {items.map((x: Sake, index: number) => (
              <SelectedSakeItem
                key={index}
                style={commonItemStyle}
                number={index + 1}
                size={circleSize}
                item={x}
              />
            ))}

            {// 残りを埋める
            array.map(index => (
              <SelectedSakeItem
                style={commonItemStyle}
                key={index}
                number={index + 1}
                size={circleSize}
              />
            ))}
          </div>
          <div
            style={{
              width: "auto"
            }}
          >
            <UIButton
              disabled={selectedItemsCount == 0}
              onClick={() => {
                if (onNextButtonClicked) onNextButtonClicked();
              }}
            >
              次へ >
            </UIButton>
          </div>
        </div>
      </Wrapper>
    );
  }
}

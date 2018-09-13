import * as React from "react";
import { UIButton } from "../atoms/buttons";
import styled from "styled-components";
import { Color, CornerRadius } from "../theme";
import { BottomBarContainer } from "../atoms/bottomBarContainer";
import { BottomBarWrapper } from "../atoms/bottomBarWrapper";

interface Props {
  selectedItems: string[];
  onNextButtonClicked: () => void;
  isNextButtonEnabled: boolean;
  style?: React.CSSProperties;
}

const Wrapper = styled.div`
  display: flex;
`;

export default class SelectBottomBar extends React.Component<Props> {
  render() {
    const {
      selectedItems,
      onNextButtonClicked,
      isNextButtonEnabled,
      style
    } = this.props;

    return (
      <BottomBarWrapper>
        <BottomBarContainer>
          <div
            style={{
              height: 100,
              backgroundColor: Color.white,
              position: "relative",
              borderTopLeftRadius: CornerRadius.mid,
              borderTopRightRadius: CornerRadius.mid,
              // borderRadius: CornerRadius.mid,
              // borderBottomLeftRadius: CornerRadius.mid,
              // borderBottomRightRadius: CornerRadius.mid,
              // marginBottom: -CornerRadius.mid,
              zIndex: 1
            }}
          >
            <div style={{ flex: 1 }}>
              {selectedItems.map((name: string, index: number) => (
                <div key={index}>{name}</div>
              ))}
            </div>
          </div>
          <div
            style={{
              backgroundColor: Color.foreground,
              position: "relative",
              // paddingTop: CornerRadius.mid,
              borderBottomLeftRadius: CornerRadius.mid,
              borderBottomRightRadius: CornerRadius.mid,
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <UIButton
              primary
              onClick={onNextButtonClicked}
              disabled={selectedItems.length == 0}
            >
              次へ
            </UIButton>
          </div>
        </BottomBarContainer>
      </BottomBarWrapper>
    );
  }
}

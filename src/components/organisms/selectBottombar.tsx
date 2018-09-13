import * as React from "react";
import { UIButton } from "../atoms/buttons";
import styled from "styled-components";
import { Color, CornerRadius } from "../theme";
import { BottomBarContainer } from "../atoms/bottomBarContainer";
import { BottomBarWrapper } from "../atoms/bottomBarWrapper";
import { buffy } from "../../util/array";

interface Props {
  selectedItems: string[];
  onNextButtonClicked: () => void;
  isNextButtonEnabled: boolean;
  style?: React.CSSProperties;
}

const Wrapper = styled.div`
  display: flex;
`;

const TagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
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
              overflow: "scroll",
              borderTopLeftRadius: CornerRadius.mid,
              borderTopRightRadius: CornerRadius.mid,
              // borderRadius: CornerRadius.mid,
              // borderBottomLeftRadius: CornerRadius.mid,
              // borderBottomRightRadius: CornerRadius.mid,
              // marginBottom: -CornerRadius.mid,
              zIndex: 1,
              padding: `${CornerRadius.mid + -4}px ${CornerRadius.mid + 4}px`
            }}
          >
            {buffy(selectedItems, 2).map((row: string[], index1: number) => (
              <TagWrapper key={index1}>
                {row.map((name: string, index2: number) => (
                  <div
                    style={{
                      width: "40%",
                      borderRadius: 4,
                      padding: 6,
                      paddingLeft: 9,
                      backgroundColor: Color.lightgray
                    }}
                    key={index1 * 2 + index2}
                  >
                    {name}
                  </div>
                ))}
              </TagWrapper>
            ))}
          </div>
          <div
            style={{
              backgroundColor: Color.foreground,
              position: "relative",
              // paddingTop: CornerRadius.mid,
              borderBottomLeftRadius: CornerRadius.mid,
              borderBottomRightRadius: CornerRadius.mid,
              display: "flex",
              justifyContent: "flex-end",
              padding: `9px ${CornerRadius.mid + 4}px`
            }}
          >
            <UIButton
              primary
              onClick={onNextButtonClicked}
              disabled={selectedItems.length == 0}
              style={{
                margin: 0
              }}
            >
              次へ
            </UIButton>
          </div>
        </BottomBarContainer>
      </BottomBarWrapper>
    );
  }
}

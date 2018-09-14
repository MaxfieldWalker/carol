import * as React from "react";
import { UIHeader, CaptionText } from "../components/atoms/typography";
import { AppHeader } from "../components/organisms/appHeader";
import { RootContainer } from "../components/atoms/rootContainer";
import { LoadingCircle } from "../components/atoms/loadingCircle";
import { HeaderedText } from "../components/molecules/headeredText";
import { UIButton } from "../components/atoms/buttons";
import { RouterProps } from "../util/router";
import { Color } from "../components/theme";

interface Props {}

type P = Props & RouterProps;

interface State {
  isLoaded: boolean;
  data?: {
    remainingTimeInMinutes: number;
    storeName: string;
    orderNumber: string;
  };
}

export default class OrderRequestedScreen extends React.Component<P, State> {
  constructor(props: P, state: State) {
    super(props, state);

    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        data: {
          remainingTimeInMinutes: 30,
          storeName: "楽天酒場",
          orderNumber: "00005782"
        }
      });
    }, 1000);
  }

  onNavigateToTopButton() {
    this.props.history.push("/");
  }

  renderContent() {
    const { data } = this.state;
    if (!data) return null;

    const { remainingTimeInMinutes, storeName, orderNumber } = data;

    return (
      <div>
        <UIHeader>ご注文が完了しました</UIHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20
          }}
        >
          <div
            style={{
              textAlign: "center"
            }}
          >
            <img
              src="/images/bike.png"
              style={{
                width: 128,
                height: 128
              }}
            />
            <CaptionText
              style={{
                color: Color.foreground
              }}
            >
              ただいま配達中
            </CaptionText>
          </div>
        </div>
        <div>
          <HeaderedText header="ご注文番号" body={orderNumber} />
          <HeaderedText
            header="お届け目安時間"
            body={`約${remainingTimeInMinutes}分`}
          />
          <HeaderedText header="提供" body={storeName} />
        </div>
        <div style={{ padding: "24px 0" }}>
          <UIButton
            primary
            style={{ width: "100%" }}
            onClick={this.onNavigateToTopButton.bind(this)}
          >
            トップへ
          </UIButton>
        </div>
      </div>
    );
  }

  render() {
    const { isLoaded, data } = this.state;

    return (
      <div>
        <AppHeader />
        <RootContainer>
          {isLoaded ? this.renderContent() : <LoadingCircle />}
        </RootContainer>
      </div>
    );
  }
}

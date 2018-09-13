import * as React from "react";
import {
  UIHeader,
  UISubheader,
  BodyText,
  CaptionText
} from "../components/atoms/typography";
import { Sake } from "../api/types";
import { PriceTag } from "../components/atoms/priceTag";
import { LoadingCircle } from "../components/atoms/loadingCircle";
import { dummySakeData } from "../data/sake";
import { SakeTableRow } from "../components/organisms/sakeTableCell";
import { UIButton } from "../components/atoms/buttons";
import { RouterProps, RouteProps } from "react-router";
import { AppHeader } from "../components/organisms/appHeader";
import { RootContainer } from "../components/atoms/rootContainer";
import { HeaderedText } from "../components/molecules/headeredText";
import { NavigateToOrderConfirmationContext } from "../util/router";
import { ApiClient } from "../api/apiClient";

interface P {}

type Props = P & RouterProps & RouteProps;

interface State {
  items: Sake[];
  isLoaded: boolean;
  autoItemsFilled: boolean;
}

export default class OrderConfirmationScreen extends React.Component<
  Props,
  State
> {
  constructor(props: Props, state: State) {
    super(props, state);

    const autoFilled = props.location!!.state
      ? (props.location!!.state as NavigateToOrderConfirmationContext)
          .autoFilled
      : true;

    console.log(props.location!!.state);

    this.state = {
      items: [],
      isLoaded: false,
      autoItemsFilled: autoFilled
    };
  }

  async componentDidMount() {
    const api = new ApiClient();

    if (!this.props.location) throw "おかしい";

    const context = this.props.location
      .state as NavigateToOrderConfirmationContext;
    const result = await api.purchase(context.item_id);

    this.setState({
      items: result.items,
      isLoaded: true
    });
  }

  onOrderButtonClicked() {
    this.props.history.push("/order/requested");
  }

  renderAutoFilledNotification() {
    return (
      <div
        style={{
          margin: "6px 0"
        }}
      >
        <CaptionText>一部の商品は自動で追加されました。</CaptionText>
      </div>
    );
  }

  renderContent() {
    const { items, autoItemsFilled } = this.state;

    const totalPrice = items
      .map(x => x.price)
      .reduce((p1: number, p2: number) => p1 + p2);

    const buttonStyle: React.CSSProperties = {
      width: "100%"
    };

    const commonStyle: React.CSSProperties = {
      margin: "3px 0"
    };

    return (
      <div>
        {autoItemsFilled ? this.renderAutoFilledNotification() : null}
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {items.map((sake: Sake, index: number) => (
              <SakeTableRow key={index} number={index + 1} {...sake} />
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "12px 0"
          }}
        >
          <PriceTag price={totalPrice} style={{ marginRight: 4 }} />
        </div>
        <div style={{ padding: "12px 0" }}>
          <UIButton
            primary
            style={buttonStyle}
            onClick={this.onOrderButtonClicked.bind(this)}
          >
            注文を確定する！
          </UIButton>
        </div>
        <div>
          <HeaderedText
            header="おとどけ先住所"
            body="東京都世田谷区玉川１丁目１４−１"
            style={commonStyle}
          />
          <HeaderedText
            header="氏名"
            body="Open Service Product Development"
            style={commonStyle}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <AppHeader />
        <RootContainer>
          <UIHeader>内容の確認</UIHeader>

          {this.state.isLoaded ? this.renderContent() : <LoadingCircle />}
        </RootContainer>
      </div>
    );
  }
}

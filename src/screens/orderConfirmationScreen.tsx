import * as React from "react";
import { UIHeader } from "../components/atoms/typography";
import { Sake } from "../api/types";
import { PriceTag } from "../components/atoms/priceTag";
import { LoadingCircle } from "../components/atoms/loadingCircle";
import { dummySakeData } from "../data/sake";
import { SakeTableRow } from "../components/organisms/sakeTableCell";
import { UIButton } from "../components/atoms/buttons";
import { RouterProps } from "react-router";
import { AppHeader } from "../components/organisms/appHeader";
import { RootContainer } from "../components/atoms/rootContainer";

interface P {}

type Props = P & RouterProps;

interface State {
  items: Sake[];
  isLoaded: boolean;
}

export default class OrderConfirmationScreen extends React.Component<
  Props,
  State
> {
  constructor(props: Props, state: State) {
    super(props, state);

    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        items: dummySakeData,
        isLoaded: true
      });
    }, 200);
  }

  onOrderButtonClicked() {
    this.props.history.push("/order/requested");
  }

  renderContent() {
    const { items } = this.state;

    const totalPrice = items
      .map(x => x.price)
      .reduce((p1: number, p2: number) => p1 + p2);

    const buttonStyle: React.CSSProperties = {
      width: "100%"
    };

    return (
      <div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse"
          }}
        >
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
          <PriceTag
            price={totalPrice}
            style={{
              marginRight: 4
            }}
          />
        </div>
        <div
          style={{
            padding: "6px 0"
          }}
        >
          <UIButton
            primary
            style={buttonStyle}
            onClick={this.onOrderButtonClicked.bind(this)}
          >
            注文を確定する！
          </UIButton>
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

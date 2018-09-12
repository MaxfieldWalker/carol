import * as React from "react";
import { UIHeader } from "../components/atoms/typography";
import { Sake } from "../api/types";
import { PriceTag } from "../components/atoms/priceTag";
import { LoadingCircle } from "../components/atoms/loadingCircle";
import { dummySakeData } from "../data/sake";
import ImagePlaceholder from "../components/atoms/imagePlaceholder";
import { SakeTableCell } from "../components/organisms/sakeTableCell";
import { UIButton } from "../components/atoms/buttons";

interface Props {}

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
    console.log("Complete the order");
  }

  renderContent() {
    const { items } = this.state;

    const totalPrice = items
      .map(x => x.price)
      .reduce((p1: number, p2: number) => p1 + p2);

    const buttonStyle: React.CSSProperties = {
      flex: 1
    };

    return (
      <div>
        <table
          style={{
            width: "100%"
          }}
        >
          <tbody>
            {items.map((sake: Sake, index: number) => (
              <SakeTableCell key={index} number={index + 1} {...sake} />
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <PriceTag price={totalPrice} />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%"
          }}
        >
          <UIButton
            style={buttonStyle}
            onClick={() => console.log("going back")}
          >
            もどる
          </UIButton>
          <UIButton
            primary
            style={buttonStyle}
            onClick={this.onOrderButtonClicked.bind(this)}
          >
            注文する
          </UIButton>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <UIHeader>内容の確認</UIHeader>
        {this.state.isLoaded ? this.renderContent() : <LoadingCircle />}
      </div>
    );
  }
}

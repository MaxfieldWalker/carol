import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../store";
import { Dispatch } from "redux";
import { updateText, UpdateTextAction } from "../actions";


interface Props {
    text: string;
    updateText: (text: string) => UpdateTextAction;
}

class TextInput extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    onChangeText(text: string) {
        this.props.updateText(text);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={e => this.onChangeText(e.target.value)} />
                <p>{this.props.text}</p>
            </div>
        );
    }
}

function mapStateToProps(state: AppState) {
    return {
        text: state.text
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        updateText: (text: string) => dispatch(updateText(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);

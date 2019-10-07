import React from "react";
import { RootState } from "../../redux/rootReducer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onErrorOccured } from "../../redux/common/actions";

export interface ErrorProps {
  error?: any;
}

const style = {
  color: "red"
};

export class ErrorComponent extends React.Component<ErrorProps> {
  render() {
    return <h4 style={style}>{this.props.error.error} Fill in the gaps</h4>;
  }
}

const mapStateToProps = (state: RootState) => ({
  error: state.error
});

const mapDispatchToProps: any = (dispatch: any) => ({
  actions: bindActionCreators(onErrorOccured, dispatch)
});

export  const Error = connect(mapStateToProps)(ErrorComponent);
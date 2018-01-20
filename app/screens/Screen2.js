import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';
import Child from '../components/child';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { goTab, dismissModal } from './screenAction';

class Screen extends Component {
  render() {
    return (
      <Container
        backgroundColor="red"
        onPress={this.props.dismissModal}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    app: state.app,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { goTab, dismissModal },
    dispatch
  );
}

Screen = connect(mapStateToProps, matchDispatchToProps)(Screen);

export default Screen;


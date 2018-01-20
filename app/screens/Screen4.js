import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { goTab } from './screenAction';

class Screen extends Component {
  handlePress = () => {
    this.props.goTab();
  };

  render() {
    return (
      <Container
        backgroundColor="#01446b"
        onPress={this.handlePress}
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
    { goTab },
    dispatch
  );
}

Screen = connect(mapStateToProps, matchDispatchToProps)(Screen);

export default Screen;
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, Button } from 'native-base';

import { push, popToRoot } from './screenAction';

class Screen extends Component {
  handlePress = () => {

    this.props.push("Screen3");
  };
  render() {
    return (
      <Container>
        <Content>
          <Button onPress={this.handlePress} block danger>
            <Text>GO</Text>
          </Button>

          <Button onPress={this.props.popToRoot} block info>
            <Text>Reset</Text>
          </Button>
        </Content>
      </Container>

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
    { push, popToRoot },
    dispatch
  );
}

Screen = connect(mapStateToProps, matchDispatchToProps)(Screen);

export default Screen;


import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon } from 'native-base';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Child from '../components/child';
import { setNav, getNav } from '.././navigatior';

class Screen extends Component {

  static navigatorStyle = {
    navBarHidden: true,
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  onNavigatorEvent(event) {
    switch (event.id) {
      case 'willAppear':
        setNav(this.props.navigator);
        break;
    }
  }
  render() {
    return (
      <Container>
        <Header />
        <Child></Child>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

Screen = connect(mapStateToProps, null)(Screen);

export default Screen;


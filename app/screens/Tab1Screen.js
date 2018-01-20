import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, Button } from 'native-base';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Child from '../components/child';
import { goLogin } from './screenAction';

class Screen extends Component {

    static navigatorStyle = {
        navBarHidden: true,

    };
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Header />
                <Content>

                    <Button onPress={this.props.goLogin} block primary>
                        <Text>Go Login Tab 1 </Text>
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
        { goLogin },
        dispatch
    );
}


Screen = connect(mapStateToProps, matchDispatchToProps)(Screen);

export default Screen;


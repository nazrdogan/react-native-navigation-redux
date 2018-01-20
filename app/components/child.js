import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon } from 'native-base';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { goDetail, showModal, goStack } from './action';

class Child extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Content>
                <Card>
                    <CardItem onPress={this.props.goDetail} button header>
                        <Icon name='home' />
                        <Text>Go Detail</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem onPress={this.props.goStack} button header>
                        <Icon name='home' />
                        <Text>Stack Nav</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem onPress={this.props.showModal} button header>
                        <Icon name='home' />
                        <Text>Show Modal</Text>
                    </CardItem>
                </Card>
            </Content>
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
        { goDetail, showModal, goStack },
        dispatch
    );
}

Child = connect(mapStateToProps, matchDispatchToProps)(Child);

export default Child;


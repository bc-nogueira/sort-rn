import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button title="Iniciar" onPress={() => navigate('Sort')} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

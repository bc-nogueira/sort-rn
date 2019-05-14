import React, {Component} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View
} from 'react-native';
import moment from 'moment';

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      numeroMax: 1000000000,
      sorted: false,
      tamanho: 10000
    }
  }

  componentDidMount() {
    this.setState({
      array: this.prepararArray()
    })
  }

  prepararArray = () => {
    const inicioTimer = moment().valueOf();
    array = Array.from({length: this.state.tamanho}, () => 
      Math.floor(Math.random() * this.state.numeroMax)
    );
    ToastAndroid.show((moment().valueOf() - inicioTimer) + 'ms', ToastAndroid.SHORT);
    return array;
  }

  ordenar = () => {
    const inicioTimer = moment().valueOf();
    let items = this.state.array;

    for (let i = 0; i < this.state.tamanho; i++) { //Number of passes
      for (let j = 0; j < (this.state.tamanho - i - 1); j++) { //Notice that j < (length - i)
        //Compare the adjacent positions
        if (items[j] > items[j + 1]) {
          //Swap the numbers
          let tmp = items[j]; //Temporary variable to hold the current number
          items[j] = items[j + 1]; //Replace current number with adjacent number
          items[j + 1] = tmp; //Replace adjacent number with current number
        }
      }
    }
    ToastAndroid.show((moment().valueOf() - inicioTimer) + 'ms', ToastAndroid.SHORT);
    this.setState({
      array: items,
      sorted: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.sorting && !this.state.sorted && 
          <ScrollView>
            <Button
              onPress={this.ordenar}
              title="Iniciar"
              color="#841584"
            />
            <Text>
              Antes: {this.state.array.join(', ')}
            </Text>
          </ScrollView>
        }

        {this.state.sorted && 
          <ScrollView>
            <Text>
              Depois: {this.state.array.join(', ')}
            </Text>
          </ScrollView>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

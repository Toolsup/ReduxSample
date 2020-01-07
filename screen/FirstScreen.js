import React, { Component } from 'react';
import { Platform, StyleSheet, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { changeCount } from '../redux/actions/index'
import { bindActionCreators } from 'redux';

class FirstScreen extends React.Component {

 
  
  gotoscreen = () => {
    this.props.navigation.navigate('Second')
  }

  decrementCount = () => {
    let { count, actions } = this.props;
    count--;
    actions.changeCount(count);
  }

  incrementCount = () => {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
  }

  render() {
    let {count} = this.props;
    return (
      <View style={styles.container}>
          
            <Button
              title="increment"
              onPress={this.incrementCount}
            />
            <Text>{count}</Text>
            <Button
              title="decrement"
              onPress={this.decrementCount}
            />
             <Button
              title="go to new screen"
              onPress={this.gotoscreen}
            />
          
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


const mapStateToProps = state => ({
  count: state.count.count,
});

const ActionCreators = Object.assign(
  {},
  changeCount,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen)

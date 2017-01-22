//IMPORT CODE WE NEED
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

//CREATE REACT COMPONENT
export default class stopwatch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header, this.border('yellow')]}>
          <View style={this.border('red')}>
            <Text>
              00:00.00
            </Text>
          </View>
        <View style={this.border('green')}>
          {this.startStopButton()}
          {this.startLapButton()}
        </View>
      </View>


        <View style={[styles.footer, this.border('blue')]}>
          <Text>
            A list of laps
          </Text>
        </View>
      </View>
    );
  }

  startStopButton() {
    return <View>
      <Text>
        Start
      </Text>
    </View>
  }

  startLapButton() {
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  }

  border(色) {
    return {borderColor: 色, borderWidth: 4}
  }

}

//STYLE THE REACT COMPONENT
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  }
})

//SHOW THE REACT COMPONENT ON THE SCREEN
AppRegistry.registerComponent('stopwatch', () => stopwatch);

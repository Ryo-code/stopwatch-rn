//IMPORT CODE WE NEED
import formatTime from 'minutes-seconds-milliseconds';
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight //just a fancy word for "button"
} from 'react-native';

//CREATE REACT COMPONENT
export default class stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeElapsed: null
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.header, this.border('yellow')]}>
          <View style={[styles.timerWrapper, this.border('red')]}>
            <Text>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>

          <View style={[styles.buttonWrapper, this.border('green')]}>
            {this.startStopButton()}
            {this.startLapButton()}
          </View>

          <TouchableHighlight onPress={this.clickityClick.bind(this)}>
            <Text>My test button...</Text>
          </TouchableHighlight>
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
    return ( <TouchableHighlight underlayColor="gray" onPress={this.handleStartPress.bind(this)}>
      <Text>
        Start
      </Text>
    </TouchableHighlight>
    )
  }

  handleStartPress(){
    const startTime = new Date();


    //this function will automatically update the state of the timer every 30 milliseconds, giving the illusion of a stopwatch
    setInterval( () => {
       this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
  }

  clickityClick(){
    console.log('clicked!')
  }

  startLapButton() {
    return (
    <TouchableHighlight>
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
    )
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
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: { //Red area
    flex: 5, //takes up 5/8ths of the available space
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { //Green area
    flex: 3, //takes up 3/8ths of the available space
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

//SHOW THE REACT COMPONENT ON THE SCREEN
AppRegistry.registerComponent('stopwatch', () => stopwatch);

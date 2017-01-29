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
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>

          <View style={styles.buttonWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={styles.footer}>
          {this.laps()}
        </View>

      </View>
    );
  }

  laps() {
    return this.state.laps.map( (time, index) => {
      return (
        <View style={styles.lap}>
          <Text style={styles.lapText}>
            Lap #{index + 1}
          </Text>
          <Text style={styles.lapText}>
            {formatTime(time)}
          </Text>
        </View>
      )
    })
  }

  startStopButton() {
    const style = this.state.running ? styles.stopButton : styles.startButton;

    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress.bind(this)}
        style={[styles.button, style]}
        >
      <Text>
        {this.state.running ? 'Stop' : 'Start'}
      </Text>
    </TouchableHighlight>
    )
  }

  clickityClick(){
    console.log('clicked!')
  }

  lapButton() {
    return (
    <TouchableHighlight
      style={styles.button}
      underlayColor="gray"
      onPress={this.handleLapPress.bind(this)}
      >
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
    )
  }

  handleLapPress(){
    const lap = this.state.timeElapsed;

    this.setState({
      laps: [...this.state.laps, lap],
      //ES5: laps: this.state.laps.concat([lap])
      startTime: new Date()
    });
  }

  handleStartPress(){
      if (this.state.running) {
        clearInterval(this.interval);
        this.setState({running: false});
        return //we want to return so that it doesn't continue
      }    //the code below (which would start the timer again)


    this.setState({
      startTime: new Date()
    });

    //this function will automatically update the state of the timer every 30 milliseconds, giving the illusion of a stopwatch
    this.interval = setInterval( () => {
       this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running: true,
      });
    }, 30);
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
  },
  timer: {
    fontSize: 60,
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lapText: {
    fontSize: 30
  }
})

//SHOW THE REACT COMPONENT ON THE SCREEN
AppRegistry.registerComponent('stopwatch', () => stopwatch);

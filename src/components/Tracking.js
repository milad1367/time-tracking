import React, { Component } from 'react';

class Tracking extends Component {
    constructor(props) {
        super(props);
        this.state = {
                      sec: 0,
                      min: 0,
                      hour: 0,
                      start: false,
                      stop: false,
                      reset: false
                     };
        this.tick = this.tick.bind(this);
        this._handleTimerStart = this._handleTimerStart.bind(this);
        this._handleTimerStop = this._handleTimerStop.bind(this);
        this._handleTimerReset = this._handleTimerReset.bind(this);



    }
    componentDidMount(){
       this.timer = setInterval(this.tick, 1000);
    }
    componentWillUnmount(){
       clearInterval(this.timer);
    }
    
    tick() {
        if(this.state.start) {
            this.setState(prevState => ({
                elapsed: new Date() - this.props.start,
                sec: prevState.sec + 1
            }));
            if(this.state.sec > 3 ){
                this.setState(prevState => ({
                    sec: 0,
                    min: prevState.min + 1,
                }));
            }
            if(this.state.min > 3 ){
                this.setState(prevState => ({
                    sec: 0,
                    min: 0,
                    hour: prevState.hour + 1
                }));
            }
        }
    }
    _handleTimerStart(){
      this.setState({
          start: true,
          stop: false,
          reset: false
      });
    }
      _handleTimerStop(){
        this.setState({
            stop: true,
            start: false,
            reset:false
        });
      }
      _handleTimerReset(){
          this.setState({
              start: false,
              sec: 0,
              min: 0,
              hour: 0

          })
      } 
    render() {
      var sec = this.state.sec ? this.state.sec : 0;
      var min = this.state.min ? this.state.min : 0; 
      var hour = this.state.hour ? this.state.hour : 0;
      return (
        <div>
          <button onClick={this._handleTimerStart}>Start</button>,
		  <button onClick={this._handleTimerStop}>Stop</button>,
		  <button onClick={this._handleTimerReset}>Reset</button>
          hour:{hour}:min:{min}:sec:{sec}
        </div>
      );
    }
  }
  
  export default Tracking;
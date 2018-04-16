import React, { Component } from 'react';

class Tracking extends Component {
    constructor(props) {
        super(props);
        this.state = {elapsed: 0};
        this.tick = this.tick.bind(this);
    }
    tick() {
        this.setState({
            elapsed: new Date() - this.props.start

        });
    }
    render() {
      return (
        <div>
        
        </div>
      );
    }
  }
  
  export default Tracking;
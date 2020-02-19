import React, {Component} from 'react';
import {Link} from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <Link to="/">Todo</Link><br/>
        About
      </div>
    );
  }
}

export default About;

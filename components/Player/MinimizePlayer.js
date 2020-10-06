import React from "react";
import {Progress } from 'reactstrap';
import moment from 'moment'

var momentDurationFormatSetup = require("moment-duration-format");

const MinimizePlayer = ({valuenow, maxvalue, handleMinimizePlayer}) => {
  return (
    <div className="footer-minimize-player">
      <Progress value={valuenow} max={maxvalue} onClick={handleMinimizePlayer}>
        {moment.duration(Math.floor(valuenow), "seconds").format()}
      </Progress>
    </div>    
  )
}

export default MinimizePlayer
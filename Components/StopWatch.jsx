import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function StopWatch() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  var updatedMs=time.ms,updatedS=time.s,updatedM=time.m,updatedH=time.h;
  const start = () => {
    run();
    setInterval(run,10);
  }
  const run = () => {
    if(updatedM===60){
        updatedH++;
        updatedM=0;
    }
    if(updatedS===60){
        updatedS=0;
        updatedM++;
    }
    if(updatedMs===100){
        updatedS++;
        updatedMs=0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
  }

  return (
    <div>
      <h>Stop Watch</h>
      <div>
        <Display time={time} />
        <Button start={start}/>
      </div>
    </div>
  );
}

export default StopWatch;

import { useEffect, useState,useRef } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TimerComponent />
    </div>
  );
}

const TimerComponent = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [editable, setEditable] = useState({ hr:'00',min:'00',sec:'00',edit: true });
  const clockRef = useRef()

  const editingFieldHndler = (e) => { 
    const {name, value} = e.target
    // let { edit : _ , ...newEditable} = editable
    // if (editable[name]) setEditable(newEditable);
    const number = value?.padStart(2, "0");


    const newTime = {
      ...editable
    };

    newTime[name] = number

    setEditable({...newTime})
    

    const calculatedTime = calculateTime(newTime.hr, newTime.min, newTime.sec);

    setTime(calculatedTime);
  };

  const calculateTime = (hour, minute, seconds) => {
    let hr = hour;
    let min = minute;
    let sec = seconds;

    if (!hr) hr = 0;
    if (!min) min = 0;
    if (!sec) sec = 0;
    return parseInt(hr) * 3600 + parseInt(min) * 60 + parseInt(sec);
  };

  const changeEditable = ()=>{
    let { edit : _ , ...newEditable} = editable
    setRunning(!running)
    running ? setEditable({...newEditable , edit : true}): setEditable({...newEditable, edit : false})
  }

  const reset = ()=>{

    if(editable.hr && editable.min && editable.sec){
      
      

    const calculatedTime = calculateTime(editable.hr, editable.min, editable.sec);

    setTime(calculatedTime);
    }else{
      setTime(0)
    }
  }

  useEffect(()=>{
    if (running && time !== 0) {
      // console.log(running);
      
      clockRef.current = setInterval(()=>{
        setTime(time => time-1)
      },1000)
      
    }
    return ()=>{
      clockRef.current && clearInterval(clockRef.current)
    }
  },[running,time])

  const hour = Math.floor(time / 3600);
  const minute = Math.floor((time - hour * 3600) / 60);
  const second = time - hour * 3600 - minute * 60;

  // console.log(time);
  console.log(editable);
  
  
  return (
    <div>
      {editable.edit ? (
        <div>
          <input
            type="text"
            name={"hr"}
            onChange={editingFieldHndler}
            maxLength={2}
            placeholder ={hour}
          />
          <input
            type="text"
            name={"min"}
            onChange={editingFieldHndler}
            maxLength={2}
            placeholder={minute}
          />
          <input
            type="text"
            name={"sec"}
            onChange={editingFieldHndler}
            
            maxLength={2}
            placeholder={second}
          />
        </div>
      ) : (
        <div>
          <span>{hour}</span>
          <br />
          <span>{minute}</span>
          <br />
          <span>{second}</span>
        </div>
      )}
 
      {running ? <button onClick={changeEditable}>Pause</button>:<button onClick={changeEditable}>Start</button>}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

//Build a simple timer app with start, pause, reset, and editable time functionality.

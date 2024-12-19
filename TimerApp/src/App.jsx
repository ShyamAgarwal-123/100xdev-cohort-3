import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)
  const [editField, setEditField] = useState(null)

  return (
    <>
      <TimerComponent/>
    </>
  )
}


function TimerComponent({isRunning}){
  return <div className='timer-component'>
    {isRunning? <TimeComponent/>:<FieldsComponent/>}
    <ButtonComponent />
  </div>  
}

function FieldsComponent({handelEditField}) {
  return <div className='fields-component'>
    <input name="hr" type="number" maxLength={2} onChange={handelEditField} />
    <input name="min" type="number" onClick={handelEditField}/>
    <input name="sec" type="number" onClick={handelEditField}/>
  </div>
}

function ButtonComponent({isRunning,handelRunningState}){
  return <div>
    <button className='start-pause' onClick={handelRunningState}>{isRunning ? "Pause":"Start"}</button>
    <button className='reset'>Reset</button>
  </div>
}

function TimeComponent(){
  return <div>
    <span className='hr'>1</span>
    <span className='min'>34</span>
    <span className='sec'>3</span>
  </div>
}
export default App

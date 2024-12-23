import { useState } from 'react'

export default function useDisable(){
  const [disable, setDisable] = useState(true)

  const handelOnChange = (e)=>{
    const val = e.target.value
    if (val) {
      setDisable(false)
    }else{
    setDisable(true)
    }
  }

  return {disable,setDisable,handelOnChange}

}
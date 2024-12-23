import { useState } from 'react'
import './App.css'

function App() {
  const [disable, setDisable] = useState(true)

  const handelOnChange = (e)=>{
    console.log(typeof e.target.value);
    
    const val = e.target.value
    if (val) {
      setDisable(false)
    }else{
    setDisable(true)
    }
  }

  return (
    <div className='h-screen w-screen bg-[#002a5a] flex justify-center' >
      <div className='w-[400px] flex flex-col items-center mt-28'>
      <Info/>
      <InputComponent handelOnChange={handelOnChange} variants={{
        placeholder: 'Your Birth Year'
      }}/>
     <ButtonComponent disable={disable} >Continue</ButtonComponent>
     </div>
    </div>
  )
}

function Info() {
  return <div className='text-center'>
    <div className='mb-20 text-3xl font-300 text-[#35c2bd]'>Webinar.gg</div>
    <div className='text-2xl font-bold text-white mb-14'>Verify Your Age</div>
    <div className='text-[#68809d] text-[12px]'>Please confirm your birth year.This data will not be stored.</div>
  </div>
}

function ButtonComponent({children,disable}){

  return <button className={` py-2 px-10 text-center rounded-md w-[250px] ${disable ? 'bg-[#7f95ab]' : 'bg-[#40e0cf]'}`}>
    {children}
  </button>
}

function InputComponent({variants,handelOnChange}){
  return <input onChange={handelOnChange} type="text" className='bg-[#173f6a] text-[12px] rounded-md text-start pr-5 pl-3 py-3 outline-none text-[white] mb-5 w-[250px] mt-3' placeholder={variants.placeholder}/>

}

export default App

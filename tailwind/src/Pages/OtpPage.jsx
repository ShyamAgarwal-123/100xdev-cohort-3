import { useRef, useState } from "react"

import InfoComponent from '../components/InfoComponent';
import useDisable from '../customHooks/useDisable';
import ButtonComponent from '../components/ButtonComponent';


const OtpPage = ({n})=>{
    const {disable, setDisable, handelOnChangeDisable} = useDisable();
    const arrRef = useRef(Array(10).fill('').map((x,index)=>x+index))
    const valRef = useRef(Array(n).fill(''))
    const [otp, setOtp] = useState(Array(n).fill(''))

    
    const nextBox = (index,val)=>{
        const updatedOtp = [...otp]
        updatedOtp[index] = val
        setOtp(updatedOtp)
        index !== n-1 && valRef.current[index+1].focus()
    }

    const goBack = (index)=>{
        console.log("hi")
        const updatedOtp = [...otp]
        updatedOtp[index] = ''
        setOtp(updatedOtp)
        index !==0 && valRef.current[index-1].focus()
    }

    const InputComponents = Array(n).fill(0).map((x,index)=> <Input arrRef={arrRef} key={index} index={index+0} refrence={(e)=> valRef.current[index]= e} nextBox={nextBox} goBack={goBack} otp={otp} setOtp={setOtp} handelOnChangeDisable={handelOnChangeDisable}/> )

    

    return <div className='h-screen w-screen bg-[#002a5a] flex justify-center' >
          <div className='w-[400px] flex flex-col items-center mt-28'>
          <InfoComponent tandc={true} >
            Check Your Email For A Code
          </InfoComponent>
          <div className="flex gap-2 mb-7 mt-5">
          {InputComponents}
          </div>
         <ButtonComponent disable={disable} >Continue</ButtonComponent>
         </div>
        </div>
}

function Input({arrRef,refrence,nextBox,goBack,index,otp,handelOnChangeDisable}){

    
    const handelOnChange = (e)=>{
        
        
        const input = e.target.value
        
        if (arrRef.current.includes(input) && e.key !== 'Backspace') {
            
            nextBox(index,input)
        }else if (e.key === 'Backspace') {
            
            goBack(index)
        }

        handelOnChangeDisable(e,otp)

        
    }
    const val = otp[index]? otp[index]: ''
    
    
    return<input type="text" value={val} maxLength={1} ref={refrence} onKeyUp={handelOnChange} onChange={handelOnChange} className="bg-[#173f6a] text-white h-11 w-8 rounded-lg pl-3 align-middle outline-none"/>
}

export default OtpPage
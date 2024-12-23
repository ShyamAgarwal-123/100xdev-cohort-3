import '../App.css'

import InfoComponent from '../components/InfoComponent';
import useDisable from '../customHooks/useDisable';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';


function DobPage() {
  const {disable, setDisable, handelOnChange} = useDisable();


  return (
    <div className='h-screen w-screen bg-[#002a5a] flex justify-center' >
      <div className='w-[400px] flex flex-col items-center mt-28'>
      <InfoComponent tandc={true}>Verify Your Age</InfoComponent>
      <InputComponent handelOnChange={handelOnChange} variants={{
        placeholder: 'Your Birth Year'
      }}/>
     <ButtonComponent disable={disable} >Continue</ButtonComponent>
     </div>
    </div>
  )
}


export default DobPage
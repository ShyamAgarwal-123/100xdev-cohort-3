import '../App.css'

import InfoComponent from '../components/InfoComponent';
import useDisable from '../customHooks/useDisable';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';


function EmailPage() {
  const {disable, setDisable, handelOnChange} = useDisable();


  return (
    <div className='h-screen w-screen bg-[#002a5a] flex justify-center' >
      <div className='w-[400px] flex flex-col items-center mt-28'>
      <InfoComponent tandc={false}>
        Let's get Started
      </InfoComponent>
      <InputComponent handelOnChange={handelOnChange} variants={{
        placeholder: 'Email Id'
      }}/>
     <ButtonComponent disable={disable} >Continue</ButtonComponent>
     </div>
    </div>
  )
}


export default EmailPage
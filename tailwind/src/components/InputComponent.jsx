export default function InputComponent({variants,handelOnChange}){
    return <input onChange={handelOnChange} type="text" className='bg-[#173f6a] text-[12px] rounded-md text-start pr-5 pl-3 py-3 outline-none text-[white] mb-5 w-[250px] mt-3' placeholder={variants.placeholder}/>
  
  }
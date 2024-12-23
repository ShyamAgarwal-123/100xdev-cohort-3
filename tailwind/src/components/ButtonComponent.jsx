export default function ButtonComponent({children,disable}){

    return <button className={` py-2 px-10 text-center rounded-md w-[250px] ${disable ? 'bg-[#7f95ab]' : 'bg-[#40e0cf]'}`}>
      {children}
    </button>
  }
import Card from "../Card/Card"

function SideBar({tab}) {
  return (
    <Card style={'w-[300px] pt-5 px-4 hidden lg:block transition-all duration-500 '}>
        <div className="flex justify-between mb-6">
            <div className='bg-[#0E2A58] text-white  text-[12px] px-2 py-1 rounded-md h-7 cursor-pointer'>Webinar.<span className="text-[#60B9B7]">gg</span></div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"  
            className="w-7 h-7 rounded-md cursor-pointer" />
        </div>
        <div className="flex flex-col gap-3 ">
            <Field option={'Home'}/>
            <Field option={'Webinars'}/>
            <Field option={'Billing'}/>
            <Field option={'User Management'}/>
            <Field option={'Settings'}/>
        </div>
    </Card>
  )
}

const Field = ({src,option,tab='Home'})=>{
    return <div className={` flex justify-between items-center px-2 py-2 rounded-md text-md ${tab === option? 'bg-[#E5E9EE] text-[#30446C] font-medium': 'bg-white text-[#807F82]'} cursor-pointer`} >
        <span>{option}</span>
        {/* <img src={src} /> */}
    </div>
}
export default SideBar
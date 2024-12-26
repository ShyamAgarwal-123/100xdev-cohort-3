
function Greating({date,greating}) {
  return (
    <div className="absolute md:left-[270px] top-10">
        <div className="text-[12px] mb-4">{date}</div>
        <div className="text-[#0E2853] text-[23px] font-bold">{greating}</div>  
    </div>
  )
}

export default Greating
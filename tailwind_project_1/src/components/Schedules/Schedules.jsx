

function Schedules({time,status,topic}) {
  return (
    <div className="flex border-[#DEDEDE] border-b-2 p-2 pl-0 gap-2">
      <div className="flex flex-col border-[#A0E8DF] items-start border-r-2 pr-2">
        <span className="text-black text-[14px]">{time}</span>
        <span className="text-[#919093] text-[10px]">{time}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] text-[#919093]">{status} 📹</span>
        <span className="text-black text-[14px]">{topic}</span>
      </div>
    </div>
  );
}

export default Schedules;

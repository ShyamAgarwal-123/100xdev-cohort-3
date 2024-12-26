const Settings = ({setting})=>{
    return <div className="flex flex-col items-center justify-center gap-2">
        <div className="bg-[#74DDD0] h-10 w-10 rounded-lg ">
        {/* <img src="#" className=" h-8 w-8 rounded-lg"/> */}
        </div>
        <div className="text-[9px] font-bold ">{setting}</div>
    </div>
}

export default Settings
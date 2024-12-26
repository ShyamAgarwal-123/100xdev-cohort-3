import Card from "../Card/Card";
function Profile({name,email,phone,url,place}) {
  return (
    <Card
      style={
        "md:flex flex-col justify-center items-center w-[200px] px-8 pt-10 pb-6 rounded-xl absolute top-[-30px] left-[50px] text-[13px] text-[#807F82] gap-2 hidden"
      }
    >
      <img
        src={url}
        className="w-[90px] h-[90px] rounded-xl mb-3 border-[#cdcbcb] border-1"
      />
      <div className="font-bold text-black text-[15px] ">{name}</div>
      <div className="flex flex-col justify-center items-center gap-1 ">
        <span>{email}</span>
        <span>{phone}</span>
      </div>
      <span>{place}</span>
    </Card>
  );
}

export default Profile;

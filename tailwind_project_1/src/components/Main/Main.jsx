import Meeting from "../Meeting/Meeting";
import Profile from "../Profile/Profile";
import Greating from "../Meeting/Greating";
function Main() {
  return (
    <div className="flex flex-col w-full">
      <div className=" h-[150px] w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCfkXtXb1KsqKkx6wAHbNXA3Eh97n9mS8KQ&s"
          className="h-full w-full"
        />
      </div>
      <div className="h-full relative md:block flex flex-col items-center">
        <Greating date={'Monday,26 December 2024'} greating={'Good morning, Prabhleen! 👋'}/>
        <Profile name={'Prabhleen Kaur'} url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s'} place={'Delhi,India'} phone={'9899999882'} email={'prabhleen@gmail.com'}/>
        <Meeting/>
      </div>
    </div>
  );
}

export default Main;

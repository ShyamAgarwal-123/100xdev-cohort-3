
import Card from "../Card/Card";
import Schedules from "../Schedules/Schedules";
import Calender from "./Calender";
import Settings from "./Settings";


function Meeting() {
  return (
    <div className="flex flex-col md:flex-row md:absolute md:left-[270px] top-[120px] gap-6 md:items-start md:right-6 justify-center items-center relative">
      <Card style={"p-4 flex flex-col flex-[2] gap-3 rounded-lg"}>
        <Calender />
        <div>
          <Schedules topic={'UX Webinar'} status={'Lives'} time={'11:30 AM'} />
          <Schedules topic={'My first Webinar'} status={'Upcoming'} time={'11:30 AM'} />
          <Schedules topic={'Important Webinar'} status={'Upcoming'} time={'11:30 AM'} />
        </div>
      </Card>
      <Card style='grid grid-cols-2 gap-x-4 gap-y-4 rounded-lg px-[20px] flex-[1] py-[20px] place-items-stretch'>
        <Settings setting={'Schedule a Webinar'}/>
        <Settings setting={'Join a Webinar'}/>
        <Settings setting={'Open Recordings'}/>
      </Card>
    </div>
  );
}



export default Meeting;

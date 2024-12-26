const Calender = () => {
    return (
      <div className="bg-[#EDEEF0] flex justify-between p-2 items-center rounded-md">
        <div className="flex gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV699zQ2HnK1FJ1UQdWj-ABUWEwTVo9Je2og&s"
            className="h-5 w-5"
          />
          <span className="text-sm">Monday,26 December 2024</span>
        </div>
        <span>← →</span>
      </div>
    );
  };

export default Calender
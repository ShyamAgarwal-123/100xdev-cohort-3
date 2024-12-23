

export default function App2(){

    const handelOnClick = ()=>{
        document.querySelector('html').classList.toggle('dark')        
    }


    return(
        <div className="flex h-screen sm:flex-row flex-col-reverse  delay-300">
            <div className="bg-red-500 dark:bg-blue-800 sm:h-screen sm:w-64 h-10 w-full">
                sideBar
            </div>
            <div className="bg-green-500 h-full w-full">
                mainContent
            </div>
            {/* <button onClick={handelOnClick}>hi</button> */}
        </div>
    )
} 
import "./App.css";
import useDebounce from "./hooks/useDebounce.js";
import { useFetch } from "./hooks/useFetch.js";


function App() {

  const sendBackendSearchRequest = ()=>{
    console.log("request send to backend");
    
  }

  const debouncedFn = useDebounce(sendBackendSearchRequest) 
  return <div>

    <input type="text" onChange={debouncedFn} />
  </div>
}

export default App;

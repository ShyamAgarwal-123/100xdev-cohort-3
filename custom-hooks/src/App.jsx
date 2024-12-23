import "./App.css";
import useDebounce from "./hooks/useDebounce.js";
import { useFetch2 } from "./hooks/useFetch2.js";


function App() {
  const {state, error, loading} = useFetch2('#',10)
  const sendBackendSearchRequest = ()=>{
    console.log("request send to backend");
    
  }

  const debouncedFn = useDebounce(sendBackendSearchRequest) 
  return <div>

    <input type="text" onChange={debouncedFn} />
  </div>
}

export default App;

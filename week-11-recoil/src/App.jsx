import { RecoilRoot ,  useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { counterAtom } from './store/atoms/countAtom'



function App() {
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}
const Counter = ()=>{

  return <div>
    <CurrentCount />
    <Increase />
    <Decrease />
  </div>
}

const CurrentCount = ()=>{

  const count = useRecoilValue(counterAtom)
  return <div>
    {count}
  </div>
}

const Decrease = ()=>{
  const setCount = useSetRecoilState(counterAtom)
  return <div>
    <button onClick={()=> setCount((c)=> c-1)}>
      Decrease
    </button>
  </div>
}

const Increase = ()=>{
  const setCount = useSetRecoilState(counterAtom)

  return <div>
    <button onClick={()=> setCount((c)=> c+1)}>
      Increase
    </button>
  </div>
}

export default App

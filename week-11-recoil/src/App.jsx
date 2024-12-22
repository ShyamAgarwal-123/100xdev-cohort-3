import { RecoilRoot ,  useRecoilState,  useRecoilStateLoadable,  useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsCountAtom, messageCountAtom, myNetworkCountAtom, notificationCountAtom, totalNotificationSelector } from './store/atoms/atom'
import { useEffect, Suspense} from 'react'



function App() {
  return<> 
  <RecoilRoot>
    {/* <Suspense fallback={<div>Loading..</div>}> */}
    <HeaderComponent/>
    {/* </Suspense> */}
  </RecoilRoot>
  </> 
}


const HeaderComponent =() =>{
  const [myNetworkCount, setMyNetworkCount] = useRecoilState(myNetworkCountAtom)
  const [jobsCount, setJobsCount] = useRecoilState(jobsCountAtom)
  // const messageCount = useRecoilValue(messageCountAtom) // this is a side effect as it returns a promise
  const [notificationCount, setNotificationCount] = useRecoilState(notificationCountAtom)
  const me = useRecoilValue(totalNotificationSelector)


  return <div>
  <button>Home</button>
  <button>My Network({myNetworkCount})</button>
  <button>Jobs({jobsCount})</button>
  <MessageComponent/>
  <button>Notifications ({notificationCount})</button>
  <button>Me({me})</button>
</div>
}

const MessageComponent = ()=>{
  const messageCount = useRecoilValueLoadable(messageCountAtom)

  if (messageCount.state==='loading') {
    return <div>
      Loading...
    </div>  
  }else if(messageCount.state === 'hasValue'){
    return <div><button>Messaging 
      {messageCount.contents}
      </button>
    </div>
  }else if(messageCount.state === 'hasError'){
    return <div><button>Messaging 
      {messageCount.contents}
      </button>
    </div>
  }
}
export default App

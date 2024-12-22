import { RecoilRoot ,  useRecoilState,  useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsCountAtom, messageCountAtom, myNetworkCountAtom, notificationCountAtom, totalNotificationSelector } from './store/atoms/atom'



function App() {
  return <RecoilRoot>
    <HeaderComponent/>
  </RecoilRoot> 
}


const HeaderComponent =() =>{
  const myNetworkCount = useRecoilValue(myNetworkCountAtom)
  const jobsCount = useRecoilValue(jobsCountAtom)
  const messageCount = useRecoilValue(messageCountAtom)
  const notificationCount = useRecoilValue(notificationCountAtom)
  const me = useRecoilValue(totalNotificationSelector)



  return <div>
  <button>Home</button>
  <button>My Network({myNetworkCount})</button>
  <button>Jobs({jobsCount})</button>
  <button>Messaging ({messageCount})</button>
  <button>Notifications ({notificationCount})</button>
  <button>Me({me})</button>
</div>
}


export default App

import './App.css'
import Card from './components/Card/Card'
import Main from './components/Main/Main'
import SideBar from './components/Sidebar/SideBar'


function App() {
  return(
    <div className='flex h-screen'>
        <SideBar/>
        <Main/>
    </div>
  )
}
  
export default App

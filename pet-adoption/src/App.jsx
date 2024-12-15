import { useState, } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import AdoptionTable from './components/adoptionTable'

function App() {
  const [adoptionTable, setAdoptionTable] = useState([])
  const [goBack , setGoBack] = useState(true);

  return (
    <div style={{
      backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/02/97/99/50/1000_F_297995004_KIRJlI4JXoOGdnk6fj8NMTC9Xvt7b5Im.jpg")',
      height: '100vh',
      width: '100vw',
      backgroundSize: "cover",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Header/>
      {/* <Form setGoBack={setGoBack} setAdoptionTable={setAdoptionTable}/> */}
      <AdoptionTable setGoBack={setGoBack} setAdoptionTable={setAdoptionTable}/>
    </div>
  )
}






export default App

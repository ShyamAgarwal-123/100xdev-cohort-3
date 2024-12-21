import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyApp from './MyApp.jsx'
import MyApp2 from './MyApp2.jsx'

createRoot(document.getElementById('root')).render(
    <MyApp2 />
)


import { Outlet } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'

function App() {
 

  return (
    <>
     <Button>click</Button>
     <Outlet/>
    </>
  )
}

export default App

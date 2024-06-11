import './App.css'
import {Routes , Route} from 'react-router-dom'
import Home from './Components/Home'
import Creat from './Components/Creat'
import Read from './Components/Read'
import Update from './Components/Update'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='creat' element={<Creat />}></Route>
        <Route path='read/:id' element={<Read />}></Route>
        <Route path='update/:id' element={<Update />}></Route>
      </Routes>
    </>
  )
}

export default App


import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/nav'
import { Routes,Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import Projectgrid from './pages/projectPage';
import Resume from './pages/resume';
import Form from './pages/contact';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/projects' element={<Projectgrid />}></Route> 
      <Route path='/contact' element={<Form />}></Route> 
      <Route path='/resume' element={<Resume />}></Route> 

    </Routes>
  )
}

export default App


import './App.css';
import Loginform from './component/login';
import { Route,Routes } from 'react-router';
import Employelist from './component/employelist';
import Employecreate from './component/createemploye';
import Employeedit from './component/editemploye';
function App() {
  return (
   <div>
   <Routes>
    <Route path='/' element={<Loginform/>}></Route>
    <Route path='/employelist' element={<Employelist/>}></Route>
    <Route path='/crateemploye' element={<Employecreate/>}></Route>
    <Route path='/editemploye/:id' element={<Employeedit/>}></Route>
   </Routes>
   
   </div>
  );
}

export default App;

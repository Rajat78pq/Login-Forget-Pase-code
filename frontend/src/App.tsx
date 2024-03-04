import {Route, Routes} from 'react-router-dom';
import Login from './component/login';
import Succes from './component/succes';
import Forget from './component/ForgetPsw'

function App() {

  return (
     <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/succes' element={<Succes />}/>
      <Route path='/Forget' element={<Forget />}/>
     </Routes>
  )
}

export default App

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Lander from './pages/Lander';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Lander />} />
        <Route path='/login' element={<Login /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
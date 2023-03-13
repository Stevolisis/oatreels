import 'font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/THeader';
import Navbar from './components/Navbar';
import Home from './containers';
import './index.css';

function App() {
  return (
    <div className=" w-full h-auto">

      <div>

      <div className='fixed h-[100%] flex flex-col justify-center items-center'><Navbar/></div>
      
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
      </BrowserRouter>
      </div>

      </div>
  );
}

export default App;

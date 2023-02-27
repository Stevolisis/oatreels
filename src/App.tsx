import 'font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './containers';
import './index.css';

function App() {
  return (
    <div className=" w-full h-screen bg-bgPrimary">
      <Header/>
      <Navbar/>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

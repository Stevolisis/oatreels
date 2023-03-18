import 'font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/THeader';
import Navbar from './components/Navbar';
import Home from './containers';
import './index.css';
import TvShows from './containers/tvshows';
import Footer from './components/Footer';

function App() {
  return (
    <div className=" w-full h-auto">

      <div>

      
      <BrowserRouter>
         <div className='md:fixed relative h-[100%] flex flex-col justify-center items-center'>
          <Navbar/>
         </div>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/tvshows' element={<TvShows/>} />
          </Routes>
          <div className='md:ml-[120px] ml-0 px-3 sm:px-5'>
          <Footer/>
          </div>
      </BrowserRouter>
      </div>
      </div>
  );
}

export default App;

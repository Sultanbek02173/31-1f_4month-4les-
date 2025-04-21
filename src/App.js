import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardPage, HomePage, MenuPage } from './pages';
import { Footer, Header } from './components';
import './app.scss';
import { Modal } from './components/modal/Modal';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  if(open === true){
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = '';
  }
  
  return (
    <BrowserRouter>
      <Header setOpen={setOpen} />
      <Modal open={open} setOpen={setOpen} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card-page/:id' element={<CardPage />} />
        <Route path='/menu-page' element={<MenuPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

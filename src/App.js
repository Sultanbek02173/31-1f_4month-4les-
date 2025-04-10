import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardPage, HomePage, MenuPage } from './pages';
import { Header } from './components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card-page' element={<CardPage />} />
        <Route path='/menu-page' element={<MenuPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

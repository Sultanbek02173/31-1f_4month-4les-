import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardPage, HomePage, MenuPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card-page' element={<CardPage />} />
        <Route path='/menu-page' element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

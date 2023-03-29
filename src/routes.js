import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
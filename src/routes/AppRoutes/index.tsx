import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../../components/Layout';

import Home from '../../pages/Home';
import Auth from '../../pages/Auth';
import User from '../../pages/User';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Layout> <Home /> </Layout> } />
        <Route path="/pokedex" element={ <Layout> <User /> </Layout> } />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

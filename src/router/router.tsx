import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Episodes from '../pages/episodes/Episodes';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import Episode from '../pages/episodes/Episode';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
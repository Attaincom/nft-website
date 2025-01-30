import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Nft from './nft';


const AppRoutes = () => {
  return (
    <>
      {/* Common Navbar */}
      <Navbar />

      {/* Define application routes */}
      <Routes>
        <Route path="/" element={<Nft />} />

      </Routes>

      {/* Common Footer */}
      <Footer />
    </>
  );
};

export default AppRoutes;

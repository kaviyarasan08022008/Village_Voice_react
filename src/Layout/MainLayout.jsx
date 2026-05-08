import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <NavBar />
      <main className='flex'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

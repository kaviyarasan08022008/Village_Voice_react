import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function TrackingLayout() {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <NavBar />
      <main className='flex'>
        <Outlet />
      </main>
    </div>
  );
}

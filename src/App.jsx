import React from 'react'

import { NavBar } from "./components/NavBar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { AppRouter } from './router/AppRouter';


export const App = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
      <AppRouter />
          
    </>
  );
}


import React from 'react'

import { Sidebar } from "./components/Sidebar/Sidebar";
import { AppRouter } from './router/AppRouter';


export const IagaApp = () => {
  return (
    <>
      
      <Sidebar />
      <AppRouter />
          
    </>
  );
}


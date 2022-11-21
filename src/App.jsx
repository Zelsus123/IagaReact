import {Routes, Route, Navigate } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./pages/Dashboard";

import React from 'react'

export const App = () => {
  return (
    <>
      <NavBar />
      <Sidebar />
          <Routes>
            {/* Ruta por defecto (se puede cambiar) */}
            <Route path="/*" element={ <Navigate to='/agenda' /> }/>
            <Route path="/panel" element={ <Dashboard/>} />
            <Route path="/denuncias" element={ <h1>Denuncias</h1>} />
            <Route path="/solicitudes" element={ <h1>Solicitudes</h1>} />
            <Route path="/agenda" element={ <h1>Agenda</h1>} />
        </Routes>
    </>
  );
}


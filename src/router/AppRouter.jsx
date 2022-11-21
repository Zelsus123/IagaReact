import { Navigate, Route, Routes } from "react-router-dom"

import { AgendaPage, ComplaintsPage, Dashboard, RequestPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
        {/* Ruta por defecto (se puede cambiar) */}
        <Route path="/*" element={ <Navigate to='/agenda' /> }/>
        <Route path="/panel" element={ <Dashboard />} />
        <Route path="/denuncias" element={ <ComplaintsPage /> } />
        <Route path="/solicitudes" element={ <RequestPage /> } />
        <Route path="/agenda" element={ <AgendaPage /> } />
    </Routes>
  )
}
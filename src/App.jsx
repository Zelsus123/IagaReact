import "./App.css";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar/Sidebar";
import {Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import {content} from "./components/pages/styles.module.scss"


function App() {
  return (
    <>
      <NavBar />
      <Sidebar />
        

        <Routes>
        <Route path="/panel" element={<Dashboard/>}/>
        <Route path="/denuncias" element={<h1>Denuncias</h1>}/>
        <Route path="/solicitudes" element={<h1>Solicitudes</h1>}/>
        <Route path="/agenda" element={<h1>Agenda</h1>}/>
        </Routes>


    </>
  );
}

export default App;

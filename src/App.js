import React from "react";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";
import Entrar from "./pages/Entrar";
import { Route, Routes } from "react-router-dom"

function App() {
  
  
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cadastrar" element={<Cadastrar/>}/>
          <Route path="/entrar" element={<Entrar/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

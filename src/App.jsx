import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { ContextGlobal } from '../src/Components/utils/global.context';
import React, { useContext } from 'react';


function App() {

  const { context, dispatch } = useContext(ContextGlobal)
  const { theme } = context

  return (
    <div className={theme}>
      <Navbar />
        <Routes>
          <Route path="/"           element={<Home />}    />
          <Route path="/detail/:id" element={<Detail />}  />
          <Route path="/favs"  element={<Favs />}    />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

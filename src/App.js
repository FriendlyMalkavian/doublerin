import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Hat from './components/Hat';
import OptoButton from './components/OptoButton';
import Footer from './components/Footer';
import FormOpt from './components/FormOpt';
import Catalog from './components/Catalog';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header /> 
      <Hat />

      <Catalog />

      <OptoButton />
      <FormOpt />
      <Footer />
      <Router>
        <Routes>
          {/* <Route
            exact path="/"
            element={<Home />}
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
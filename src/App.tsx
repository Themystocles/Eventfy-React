import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRoutes from './routes/Routes';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">

          <AppRoutes />


        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

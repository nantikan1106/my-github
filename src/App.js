import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-4">
        <h1>Welcome to My Restaurant in Chiang Mai</h1>
        <p>React + Bootstrap is amazing!</p>
      </main>
      <main className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <h2>Main Content</h2>
            <p>This is where the main content goes.</p>
          </div>
          <div className="col-md-4">
            <h2>Sidebar</h2>
            <p>This is where the sidebar content goes.</p>     
          </div>
        </div>
      </main>
      <main className="container mt-4">
        <Home/>
        <div className="row">
        </div>
      </main>

      <main className="container mt-4">
        <Menu/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

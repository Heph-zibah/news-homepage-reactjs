import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Popular/Popular";

function App() {
  return (
    <>
      <div className="container">
        <Navbar/>
        <main>
          <Hero/>
          <Sidebar/>
        </main>
        <Popular/>
        <footer >
          <p>
            Challenge by <a href="#">
            Challenge by Frontend Mentor.</a>. 
            Coded by <a href="#">Oluwatosin Abigail Daramola</a>.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;

import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Popular from "./components/Popular/Popular";

function App() {
  return (
    <>
      <div className="container">
        <Navbar className='item1'/>
        <Hero className='item2'/>
        <Sidebar className='item3'/>
        <Popular className='item4'/>
        <footer className="item5">
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

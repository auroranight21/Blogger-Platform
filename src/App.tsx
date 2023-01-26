import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Blogs from "./components/Blogs/Blogs";
import {Navbar} from "./components/Navbar/Navbar";
import {NavLink} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <div>
              <Header/>
          </div>

        <Navbar/>
        <section>

            <NavLink to={'/page/0'} element={<Posts/>}></NavLink>
          <Posts/>
          <Blogs/>
        </section>
      </div>
  );
}

export default App;

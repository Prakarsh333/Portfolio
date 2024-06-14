import React, { useState, useEffect, useRef } from "react";
import SideBar from "./IndentComponent/Sidebar";
import Draft from "./IndentComponent/DDraft";
import Header from "./IndentComponent/Header";
import Action from "./IndentComponent/Action";
import SideBar2 from "./IndentComponent/Sidebar2";
import "./temp.css";
import DraftContent from "./IndentComponent/DraftContent";
import Main from "./IndentComponent/Main";
import DraftComponent from "./IndentComponent/DraftComponent";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import IndentPage from "./pages/Indentpage";
import RTSpage from "./pages/RTSpage";

function App() {
  return (
    <>
      {/* <div class="flex flex-row">
      <div class="flex-none w-34"><SideBar /></div>
      <div class="flex-1"><Main /></div>
    </div> */}
    <RTSpage />
      
    </>
  );
}

export default App;

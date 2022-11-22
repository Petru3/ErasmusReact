import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './Styling/StylingComponents/headerCss/header.css'

import Navbar from './Components/GlobalComponents/Navbar';
import Footer from './Components/GlobalComponents/Footer';

import Login from './Pages/Login/LoginReg';
import HomePage from './Pages/HomePage'
import CoursesAll from './Pages/Courses/CoursesAll'
import DashboardPage from './Pages/Dashboard';
import CulturalJurnal from './Pages/CurturalJurnal';
import Video from './Pages/Video';
import ActivityJurnal from './Pages/ActivityJurnal';
import TemplateCourse from './Pages/Courses/TemplateCourse';
import Spanish from './Pages/Courses/CoursesPage/Spanish';
import English from './Pages/Courses/CoursesPage/English';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<HomePage/>} path="/"/>
        <Route element={<ActivityJurnal/>} path="/activity-jurnal"/>
        <Route element={<CulturalJurnal/>} path="/cultural-jurnal"/>
        <Route element={<CoursesAll/>} path="/courses"/>
        <Route element={<TemplateCourse/>}  path="/courses/temp"/>
        <Route element={<Spanish/>} path="/courses/spanish"/>
        <Route element={<English/>}  path="/courses/english"/>
        <Route element={<Video/>} path="/video"/>
        <Route element={<DashboardPage/>} path="/dashboard"/>
        <Route element={<Login/>} path="/login"/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

import Intro from 'pages/Intro';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Result from 'pages/Result';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main/:user" element={<Main />} />
        <Route path="/result/:user" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

import React from 'react'
import Navbar from "./Component/Navbar"
import News from "./Component/News"
import { BrowserRouter,Route,Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
          <Route index element={<News></News>}/>
          <Route path="/:country" element={<News></News>}/>
          <Route path="/:country/:category" element={<News></News>}/>
          <Route path="*" element={<h1>404  Request</h1>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Blogs from './pages/Blogs';
import BlogList from './pages/BlogPost'
import './App.css'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blogs-post' element={<BlogList/>}/>


    </Routes>
      
    </BrowserRouter>
  )
}

export default App

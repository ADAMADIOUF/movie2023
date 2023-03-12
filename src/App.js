import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Movie from './components/SingleMovie'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />}></Route>
        <Route path={`/movies/:id`} element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

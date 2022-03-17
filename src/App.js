import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList';

function App() {
  return (
    <>
      <h3>APP MAIN</h3>
      <Routes>
        <Route path='/' element={<StarshipList />}/>
      </Routes>
    </>
  );
}

export default App;
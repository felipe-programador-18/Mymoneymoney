import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './elements/Header'
import Home from './pages/Home'
import Movimentacoes from './pages/Movimentacoes'

function App() {
  return (
  <Router>
     <div>
     <Header/>
       <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/movimentacoes/:data' element={<Movimentacoes/>} />
       </Routes>
     </div>
  </Router>
  );
}

export default App;

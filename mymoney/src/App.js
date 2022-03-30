import './App.css'
import React from 'react'
//import useGet from './useGet'
//import usePost from './usePost'
//import useDelete from './useDelete'
import Header from './elements/Header'
import Meses from './Meses'
import Adicionarmes from './Adicionar.meses'


function App() {
  return (
 <div className="App">
    <Header/>
    <Adicionarmes/>
  <div className='container'>
   
     <Meses/>
       
       
  </div>  
</div>
  );
}

export default App;

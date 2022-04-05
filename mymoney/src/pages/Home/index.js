import React from "react"
import Meses from './Meses'
import Adicionarmes from './Adicionar.meses'
const Home = () =>{
    return(
      <div className='container'>
      <Adicionarmes/>
       <Meses/>
       </div>  
    )
  }
  
export default Home

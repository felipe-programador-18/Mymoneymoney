import React from "react"
import Rest from '../utils/rest'

const baseUrl = 'https://monthly-app-2d69d-default-rtdb.firebaseio.com/'
const {useGet} = Rest(baseUrl)


const Movimentacoes = ({match}) =>{
  
  const data = useGet(`movimentacoes/${ match.params.data}`)
    
   return( <div className="container" >
      <h1 className='text-dark'>Movimentações</h1>
     
        <pre>{JSON.stringify(data)}</pre>

      </div>
    )
  }

export default Movimentacoes







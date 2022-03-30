import React from "react"
import Rest from './rest'

const baseUrl = 'https://monthly-app-2d69d-default-rtdb.firebaseio.com/'
const {useGet} = Rest(baseUrl)

const Meses = () =>{
   const data = useGet('meses')
     if(data.loading){
        return <span>Carregando...</span> 
      }
     if(Object.keys(data.data).length >0){
    return( <React.Fragment>
    <table className='table'>
         <thead>
           <tr>
             <th>Mês</th>
             <th>Previsão entrada</th>
             <th>Entrada</th>
             <th>Previsão de saída</th>
             <th>saída</th>
           </tr>
         </thead>
         
         <tbody>
           {
             Object
             .keys(data.data)
             .map(mes => {
               return(  
                  <tr key={mes}>
                     <td> {mes} </td>
                     <td> {data.data[mes].previsao_entrada} </td>
                     <td> {data.data[mes].entrada} </td>
                     <td> {data.data[mes].previsao_saida} </td>
                     <td> {data.data[mes].saida} </td>
                  </tr>
                  )
             })
           }
         </tbody>
      </table> 
       
    </React.Fragment>)}
    return null
}


export default Meses

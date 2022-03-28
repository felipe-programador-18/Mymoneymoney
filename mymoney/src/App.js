import './App.css'
import React from 'react'
//import useGet from './useGet'
//import usePost from './usePost'
//import useDelete from './useDelete'
import Rest from './rest'

const baseUrl = 'https://monthly-app-2d69d-default-rtdb.firebaseio.com/'

const {useGet} = Rest(baseUrl)


function App() {
 // const data = useGet('movimentacoes/2022-03')
  const data = useGet('meses')
  //const [postData, post] = usePost('movimentacoes/2022-03')
  //const [postRemove, remove] = useDelete()

   //const Save =  () =>{
   // post({
    //  valor:'10000', descricao:'remerber always practice'
   // })
   // }

    //const Removed = () =>{
      //remove('movimentacoes/2022-03/-MzGw_EcpVOHagYECpIW' )
    //}


  return (

    <div className="App">

    <nav className='navbar navbar-dark bg-primary '>
      <div className='container'>
         <a href='/' className=' navbar-brand '>My Money</a>
      </div>
    </nav>

    <h2>Adicionar mês</h2>
      <select>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
      </select>

        <select>
        <option value='01'>01</option>
        <option value='02'>02</option>
      </select>   

      <button>Adicionar mês</button>

      {JSON.stringify(data)}
          
       { data.loading && <span>Carregando...</span> }

       { !data.loading && <table className='table'>
           <tbody>
             <tr>
               <td> 2019-09 </td>
               <td>0</td>
             </tr>
           </tbody>
       </table> }
   

    </div>
  );
}

export default App;

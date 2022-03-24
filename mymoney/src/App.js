import './App.css'
import React from 'react'
import useGet from './useGet'
import usePost from './usePost'
import useDelete from './useDelete'


const url = 'https://monthly-app-2d69d-default-rtdb.firebaseio.com/movimentacoes/2022-03.json'


function App() {
  const data = useGet(url)
  const [postData, post] = usePost(url)
  const [postRemove, remove] = useDelete(url)

   const Save =  () =>{
    post({
      valor:'valor', descricao:'remerber practice about that'
    })
    }

    const Removed = () =>{
      remove( 'https://monthly-app-2d69d-default-rtdb.firebaseio.com/movimentacoes/2022-03/-MyxOgGMApGDpgW-K5-v.json')
    }


  return (
    <div className="App">
    <h1> My Money </h1>
    {JSON.stringify(data)}
    {data.loading && <p> loading ....</p>  } 

       <button onClick={Save} >Salvar</button>
       <button onClick={Removed}>Deleta</button> 
       {JSON.stringify(postRemove)}     
    <pre> {JSON.stringify(postRemove)}  </pre>
    <pre> {JSON.stringify(postData)}  </pre>

    </div>
  );
}

export default App;

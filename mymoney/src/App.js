import './App.css'
import React from 'react'
//import useGet from './useGet'
//import usePost from './usePost'
//import useDelete from './useDelete'
import Rest from './rest'

const baseUrl = 'https://monthly-app-2d69d-default-rtdb.firebaseio.com/'

const {useGet,usePost, useDelete } = Rest(baseUrl)


function App() {
  const data = useGet('movimentacoes')
  const [postData, post] = usePost('movimentacoes')
  const [postRemove, remove] = useDelete()

   const Save =  () =>{
    post({
      valor:'10', descricao:'remerber practice about that'
    })
    }

    const Removed = () =>{
      remove('movimentacoes.json' )
    }


  return (
    <div className="App">
    <h1> My Money </h1>
     {JSON.stringify(data)}
    {data.loading && <p> loading ....</p>  } 

       <button onClick={Save} >Salvar</button>
       <button onClick={Removed}>Deleta</button> 
    
    <pre> {JSON.stringify(postRemove)}  </pre>
    <pre> {JSON.stringify(postData)}  </pre>

   

   <h1 className='text-danger'>teste bootstrap</h1>
   

    </div>
  );
}

export default App;

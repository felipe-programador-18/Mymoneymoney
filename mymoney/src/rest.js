import {useEffect, useReducer} from 'react'
import axios from 'axios'

const reducer  = (state, action) =>{
  
  if(action.type ==='REQUEST'){
      return{
          ...state,
          loading: true
      }
  }
  if(action.type ==='SUCCESS'){
      return{
          ...state,
          loading: false,
          data: action.date
      }
  }
    return state
}

const baseUrl = 'https://monthly-app-2d69d-default-rtdb.firebaseio.com/'
const useGet =  resource =>{
    const [data, dispatch] = useReducer(reducer, {loading:true, data:{}})
    useEffect(() => {
      dispatch({type:'REQUEST'})
      axios
      .get(baseUrl + resource + '.json')
      .then(res => {
        console.log(res.data)
        dispatch({type:'SUCCESS', data: res.data})
      })
    },[])
     return data
}

export default useGet






















































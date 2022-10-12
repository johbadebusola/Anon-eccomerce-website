import React,{useEffect,useState} from 'react'
import Squad from './squad'

const PlayerInfo = () => {
    const [data,setData] = useState()
    const [error,setError] = useState("")
    const[loading,setLoading] = useState()

const fetchData = () => {
    fetch("https://6345cf7539ca915a69085e5a.mockapi.io/players")
    .then((response) => {
      
        response.json()
    })
    .then((result) => {
        setData(result)
        setLoading(true)
    
    })
}
   useEffect(() =>{fetchData()},[])

  return (
    <div>
     
 <Squad data={data} loading={loading} error={error} />

    </div>
  
  )
}

export default PlayerInfo
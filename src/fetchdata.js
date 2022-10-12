
import React, { useEffect, useState } from 'react'
import PlayerData from './squad'
function PlayerInfo() {
const [data,SetData] = useState([])
const [loading,setLoading] = useState("")
const [error,setError] = useState("")

function getData() {
    fetch("https://6345cf7539ca915a69085e5a.mockapi.io/players")
  .then((response) => {
    // if(response.status === 404){
    //     setError("ERROR")
    //     setLoading(true)
    // }
     return response.json()
  })
  .then((result) => {
    SetData(result)
    setLoading(true)
  })
  .catch(() => setError("ERROR 404"))
}


    useEffect(() => {
    getData()

    },[])


  return (
    <div>
       <h1>{error}</h1>
        <PlayerData data={data} loading={loading} error={error}/>
    </div>
  )
}

export default PlayerInfo
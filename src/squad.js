import React from 'react'

 const PlayerData = ({data,loading,error}) => {
  const datas = data.map((info) => (<div>
    <p key={info.name}> {info.name}</p>
  <p> {info.info}</p>
  <img src={info.image} />
  <p>{info.biodata} </p>
    </div>
  ))
  return (
    <div>
       {loading ? (<h3>{datas}</h3>) : (<h5> Fetching data.....</h5>)}
       <h1>{error}</h1>
    </div>
  )
}

export default PlayerData
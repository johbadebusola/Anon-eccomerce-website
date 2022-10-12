import React from 'react'

const Squad = ({data,loading,error}) => {
    console.log(data)
    // const [currentPage,setCurrentPage] = useState(1)
    // const [postPerPage,setPostPerPage] = useState(3)

    // const lastPost = currentPage * postPerPage
    // const firstPost = lastPost - postPerPage
    // const currentPost = data.slice(firstPost,lastPost)

    // const PlayerInfo = data.map((info) => (<p>{info.name}</p>))
  return (
    <div>
          {
            loading ? (<p>{error}</p>) : (<h1>Loading.......</h1>)
        }
    </div>

  )
}

export default Squad
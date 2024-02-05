import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const params = useParams()
    console.log(params);

    
    const [data, setData] = useState(null)

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        }).catch((err)=>{
            log.error(err);
        })
    }, [])


  return (
    <>
    <h1>{data?.title}</h1>
    </>
  )
}

export default SingleProduct
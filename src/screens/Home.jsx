import axios from 'axios'
import React, { useEffect} from 'react'

const Home = () => {

    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            log.error(err);
        })
    }, [])

  return (
    <div>Home</div>
  )
}

export default Home
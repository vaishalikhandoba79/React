import React, { useEffect, useState} from 'react'
import "./home.css"
import axios from 'axios'

const Home = () => {
    const[users , setUsers] = useState([]);
    console.log(users);

    useEffect(()=>{
        axios.get("https://")
    })
  return (
    <section id="homeBlock">
        <article>
            <h1>List of Users</h1>

        </article>
    </section>
   
  )
}

export default Home
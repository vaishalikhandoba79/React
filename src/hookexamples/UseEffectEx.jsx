import React, { useEffect,useState } from 'react'
const UseEffectEx = () => {
    // const [count , setCount] = useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(1000);
    // },5000);
    // document.title = "MRU";
    // document.title = count;
    // },[])

    //!API fetching
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json().then(data=>{
            //console.log(data);
        }))
        .catch(err=>console.log(err))
    })
  return (
    <div>UseEffectEx
        <h1>{count}</h1>
    </div>
  )
}
export default UseEffectEx

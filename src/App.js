import React from "react";
import { useEffect,useState } from "react"; 


function App () {
  const [data,setData] = useState([])

 
  useEffect( () =>{
    async function getData () {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data2 = await response.json()
      if (data && data2.length) setData(data2)
    }

    getData();
  },[])
  return (
    <>
      <ul>
        {
          data.map( item => (
            <li key={Math.random()}>{item.title}</li>
          ))
        }
      </ul>
    </>
  )
}
export default App;

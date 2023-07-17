
import React from 'react';

const User = ({name,hobbies,children}) => {

  return <section>
    <p>Name : {name}</p>
    {
      hobbies.map( (items,index) => 
        <p key={index+1}>Hobbie {index+1} : Pagi {items.first} , Malam {items.second}</p>
       
      )
    }
    {children}

  </section>
}

export default User;

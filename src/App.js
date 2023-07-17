
import React from 'react';
import { Fragment } from "react";
import User from "./components/User";

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>InValid Password</h1>;
const Password = ({isValid}) => {
  if (isValid) {
    return <ValidPassword></ValidPassword>;
  } else {
    return  <InvalidPassword></InvalidPassword>;
  };
}

function App() {
  return <Fragment>
    {
      <Password isValid={false}>
      </Password>
    }
  </Fragment> 
   
};

export default App;

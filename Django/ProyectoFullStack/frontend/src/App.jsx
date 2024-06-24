import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage]= useState('');

  useEffect(()=>{
    axios.get('http://localhost:8000/hola/hello-world/')
      .then(response=>{
        setMessage(response.data.message);
        console.log('Respuesta recibida');
      })
      .catch(error=>{
        console.log(error);
      });
  },[]);

  return(
    <div>
      <p>{message}</p>
    </div>
  );  
}

export default HelloWorld;

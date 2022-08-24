import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface Data {
  id: string;
  text: string;
}

function App() {
  const [hello, setData] = useState();

  useEffect(() => {
    fetch('/hello')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return <div className="App">{hello}</div>;
}

export default App;

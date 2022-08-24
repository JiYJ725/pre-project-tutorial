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
    fetch(
      'http://ec2-54-180-106-244.ap-northeast-2.compute.amazonaws.com:8080/hello'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hello[0].text);
        setData(data.hello[0].text);
      });
  }, []);
  return <div className="App">{hello}</div>;
}

export default App;

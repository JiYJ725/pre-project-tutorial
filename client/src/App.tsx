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
        console.log(data.hello[0].text);
        setData(data.hello[0].text);
      });
  }, []);
  return (
    <div className="App">
      ==============team30 변경해보기
      <div>{hello}</div>
    </div>
  );
}

export default App;

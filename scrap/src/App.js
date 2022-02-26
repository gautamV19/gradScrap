import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [roll, setRoll] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState("");

  const sendData = () => {
    const req = {
      rollnumber: roll,
      password: pass,
    };
    console.log("sending it", req);
    axios.post("/scrape", null, {
      params: {
        req
      }
    }).then((result) => {
      console.log(result);
      console.log(result.data);
      return data
    })
  }

  const handleRchange = (e) => {
    console.log(e.target.value);
    setRoll(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" name="rol" onChange={handleRchange} label="Roll no." />
      <input type="text" name="psw" onChange={(e) => setPass(e.target.value)} label="password" />
      <button onClick={sendData}>get grades</button>
    </div>
  );
}

export default App;

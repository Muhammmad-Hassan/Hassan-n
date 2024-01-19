import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenrator =
    useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "@#$%^&*(){}[]?/<>=+";
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    },
    [length, numberAllowed, charAllowed , setPassword]);
  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, charAllowed , passwordGenrator]);

  return (
    <>
      <div className="container">
        <div>
          <input type="text" placeholder="Password" value={password} readOnly />
          <button>copy</button>
        </div>
        <div className="cardA">
          <div className="container2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="cardA">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />

            <label>numberAllowed</label>
          </div>
          <div className="cardA">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>charAllowed</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

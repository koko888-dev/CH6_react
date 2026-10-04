import { useState } from 'react';

function Todo1() {
  const [isRed, setIsRed] = useState(true);
  const [changeTextColor, setChangeTextColor] = useState(true);
  const [changeText, setChangeText] = useState("Hello world");
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Todo 1 Component</h2>
      <button
        style={{
          backgroundColor: isRed ? 'red' : 'blue'
        }}
        onClick={() => setIsRed(!isRed)}
      >
        {isRed ? 'Go Blue' : 'Go Red'}
      </button>

      <hr />
      <div>
        <p style={{ color: changeTextColor }}>{changeText}</p>
        <input type="text" onChange={(e) => setChangeText(e.target.value)} />
        <input type="color" onChange={(e) => setChangeTextColor(e.target.value)} />
      </div>
      <hr />
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>count up</button>
        <button onClick={() => setCount(count - 1)}>count down</button>
      </div>
    </div>
  );
}

export default Todo1;

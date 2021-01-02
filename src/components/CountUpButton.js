import React, {useState} from 'react';

const CountUpButton = () => {
  const [count, setCount] = useState(0);

  return (
    <button id={"counter"} className="btn" onClick={() => setCount(count + 3)}>Like: {count}</button>
  )
}

export default CountUpButton
import React, {useState, useEffect} from 'react';

const LikeButton = () => {
  const [count, counter] = useState(0);

  const countUp = () => {
    counter(count++)
  }

  useEffect(() => {
    document.getElementById("counter").addEventListener('click', countUp)
  })

  return (
    <button id={"counter"} className="btn">Like: {count}</button>
  )
}

export default LikeButton
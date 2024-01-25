import React, { useState } from 'react';

function useIncrement() {
  const [count, setCount] = useState(0);

  function increase(addAmount) {
    setCount(prevCount => prevCount + addAmount);
  }

  return [count, increase];
}

function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div>
      <h2>Counter 1</h2>
      <p>Count: {count}</p>
      <button onClick={() => increase(1)}>Increase</button>
    </div>
  );
}

function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div>
      <h2>Counter 2</h2>
      <p>Count: {count}</p>
      <button onClick={() => increase(2)}>Increase</button>
    </div>
  );
}

function App1() {
  return (
    <div>
      <Counter1 />
      <Counter2 />
    </div>
  );
}

export default App1;
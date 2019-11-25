import React, { useState, lazy, Suspense } from 'react';
import styles from './App.css';

const Warning = lazy(() => import('./Warning'));

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.container}>
      <h1>Hello world</h1>
      {count > 3 && (
        <Suspense fallback={null}>
          <Warning />
        </Suspense>
      )}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default App;

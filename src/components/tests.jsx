import React, { useState } from 'react';

const TowerOfHanoi = () => {
  const [pegs, setPegs] = useState({ A: [3, 2, 1], B: [], C: [] });

  const towerOfHanoi = (n, fromPeg, toPeg, auxPeg) => {
    if (n === 1) {
      const newPegs = { ...pegs };
      newPegs[toPeg].push(newPegs[fromPeg].pop());
      setPegs(newPegs);
      return;
    }
    towerOfHanoi(n - 1, fromPeg, auxPeg, toPeg);
    const newPegs = { ...pegs };
    newPegs[toPeg].push(newPegs[fromPeg].pop());
    setPegs(newPegs);
    towerOfHanoi(n - 1, auxPeg, toPeg, fromPeg);
  };

  return (
    <div>
      <button onClick={() => towerOfHanoi(3, 'A', 'C', 'B')}>Solve</button>
      <div>
        <h3>Peg A: {pegs.A.join(', ')}</h3>
        <h3>Peg B: {pegs.B.join(', ')}</h3>
        <h3>Peg C: {pegs.C.join(', ')}</h3>
      </div>
    </div>
  );
};

export default TowerOfHanoi;

import Input from './Input';

function App() {
  return (
    <div id="content">
      <Input type="text" placeholder="Your name" />
      <Input richText placeholder="Your message" />
    </div>
  );
}

export default App;

export default function Input({ richText, ...props }) {
    // return a <textarea> if a richText prop is true
    // return an <input> otherwise
    // forward / set the received props on the returned elements
      return richText ? <textarea {...props} /> : <input {...props} />;
  }

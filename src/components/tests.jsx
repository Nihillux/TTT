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

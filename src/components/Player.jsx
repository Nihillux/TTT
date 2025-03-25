import { useState } from 'react';

export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);
    const handleClick = () => {
        setIsEditing((prev) => !prev);
      };

    return (
        <li>
        <span className="player">
        {isEditing ? <input type="text" required value={name} /> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </span>
      </li>
    );
}
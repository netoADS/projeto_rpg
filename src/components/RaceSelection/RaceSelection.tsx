import React from 'react';
import { Race } from '../../data/factions/factions';

interface Props {
  races: Race[];
  onBack: () => void;
  onSelect: (raceId: number) => void;
}

const RaceSelection: React.FC<Props> = ({ races, onBack, onSelect }) => {
  return (
    <div>
      <h2>Escolha uma Raça</h2>
      <button onClick={onBack}>Voltar</button>
      {races.map(race => (
        <div key={race.id} onClick={() => onSelect(race.id)}>
          <h3>{race.name}</h3>
          <p>{race.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RaceSelection;

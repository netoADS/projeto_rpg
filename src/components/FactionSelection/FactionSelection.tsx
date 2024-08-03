import React from 'react';
import { Faction } from '../../data/factions/factions';
import './FactionSelectionCss.css';

interface Props {
  factions: Faction[];
  onSelect: (factionId: number) => void;
}

const FactionSelection: React.FC<Props> = ({ factions, onSelect }) => {
  return (
    <div className="faction-selection">
      <h2>Escolha uma Facção</h2>
      {factions.map(faction => (
        <div key={faction.id} onClick={() => onSelect(faction.id)} className="faction-item">
          <img src={faction.emblem} alt={`${faction.name} Emblem`} className="faction-emblem" />
          <h3>{faction.name}</h3>
          <p>{faction.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FactionSelection;

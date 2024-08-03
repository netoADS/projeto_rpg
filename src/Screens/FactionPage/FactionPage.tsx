import React, { useState } from 'react';
import FactionSelection from '../../components/FactionSelection/FactionSelection';
import RaceSelection from '../../components/RaceSelection/RaceSelection';
import { factions, Faction } from '../../data/factions/factions';
import { useNavigate } from 'react-router-dom';
import './FactionPageCss.css';

const FactionPage: React.FC = () => {
  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
  const navigate = useNavigate();

  const handleFactionSelect = (factionId: number) => {
    const faction = factions.find(f => f.id === factionId) || null;
    setSelectedFaction(faction);
  };

  const handleBack = () => {
    setSelectedFaction(null);
  };

  const handleRaceSelect = (raceId: number) => {
    // Implementar a lógica de seleção da raça, como redirecionar para uma página específica
    console.log(`Raça selecionada: ${raceId}`);
    navigate('/some-next-page'); // Redirecionar para a próxima página
  };

  return (
    <div className="faction-page">
      {selectedFaction ? (
        <RaceSelection races={selectedFaction.races} onBack={handleBack} onSelect={handleRaceSelect} />
      ) : (
        <div className="faction-selection-container">
          <div className="faction-container faction-left">
            <FactionSelection factions={factions.filter(faction => faction.id === 1)} onSelect={handleFactionSelect} />
          </div>
          <div className="faction-container faction-right">
            <FactionSelection factions={factions.filter(faction => faction.id === 2)} onSelect={handleFactionSelect} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FactionPage;

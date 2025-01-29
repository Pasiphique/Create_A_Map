


import React, { useEffect, useState } from 'react';
import funFactsData from './assets/funFacts.json' // Import the JSON file

const FunFacts = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    // Setting the facts data from the imported JSON
    setFacts(funFactsData);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
        justifyContent: 'center',
      }}
    >
      {facts.map((fact) => (
        <div
          key={fact.id}
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            padding: '15px',
            width: '250px',
            fontSize: '1.1em',
            margin: '10px',
            textAlign: 'center',
          }}
        >
          {fact.description}
        </div>
      ))}
    </div>
  );
};

export default FunFacts;

import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

// Composant d'affichage et notation par étoiles
const StarRating = ({ rating = 0, maxRating = 5, onRate }) => {
  const [hovered, setHovered] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);

  React.useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  const handleClick = (rate) => {
    setCurrentRating(rate);
    if (onRate) onRate(rate);
  };

  return (
    <span style={{ color: '#f5a623', cursor: onRate ? 'pointer' : 'default' }}>
      {[...Array(maxRating)].map((_, i) => {
        const starNumber = i + 1;
        return (
          <span
            key={i}
            onMouseEnter={() => setHovered(starNumber)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => handleClick(starNumber)}
            style={{
              color: starNumber <= (hovered || currentRating) ? '#f5a623' : '#ccc',
              fontSize: '1.2rem',
              userSelect: 'none',
            }}
          >
            ★
          </span>
        );
      })}
      <span style={{ marginLeft: 6, fontSize: '0.9rem', color: '#333' }}>
        {currentRating.toFixed(1)}
      </span>
    </span>
  );
};

const HandyManList = () => {
  const { data: handymen, loading, error, refetch } = useFetch('/api/handymen');
  const [ratingErrors, setRatingErrors] = useState({});

  const handleRate = async (handymanId, rating) => {
    setRatingErrors((prev) => ({ ...prev, [handymanId]: null }));
    try {
      const res = await fetch(`/api/handymen/${handymanId}/rate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating }),
      });
      if (!res.ok) throw new Error('Erreur lors de l’envoi de la note');
      refetch();
    } catch (err) {
      setRatingErrors((prev) => ({ ...prev, [handymanId]: err.message }));
    }
  };

  if (loading) return <p>Chargement des prestataires...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!handymen || handymen.length === 0) return <p>Aucun prestataire trouvé.</p>;

  return (
    <div>
      <h2>Liste des prestataires</h2>
      <button onClick={refetch} className="refresh-button">🔄 Rafraîchir</button>
      <ul>
        {handymen.map((handyman) => (
          <li key={handyman.id} style={{ marginBottom: 20 }}>
            <strong>{handyman.name}</strong> – {handyman.specialty}<br />
            📞 {handyman.phone} | ✉️ {handyman.email}<br />
            <div>
              <strong>Note moyenne :</strong>{' '}
              <StarRating rating={handyman.rating || 0} maxRating={5} />
            </div>
            <div>
              <strong>Donnez votre note :</strong>{' '}
              <StarRating maxRating={5} onRate={(rating) => handleRate(handyman.id, rating)} />
            </div>
            {ratingErrors[handyman.id] && (
              <p style={{ color: 'red' }}>Erreur : {ratingErrors[handyman.id]}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HandyManList;

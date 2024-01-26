import { CSSProperties, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../fonts.css';
import episodeImage from '../../../public/images/episode.png';
import morty from '../../../public/images/morty.png';

export default function Episode() {

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [episodeDetails, setEpisodeDetails] = useState(null);
  const [characters, setCharacters] = useState([]);

  const styles = {
    fontFamily: 'MontserratAlternates, sans-serif',
    color: '#FFF',
    fontSize: '24px',
    fontWeight: '700',
  };

  const styles1 = {
    fontFamily: 'MontserratAlternates, sans-serif',
    color: '#F9F9F9',
    fontSize: '20px',
    fontWeight: '700',
  };

  const styles2 = {
    fontFamily: 'MontserratAlternates, sans-serif',
    color: '#F9F9F9',
    fontSize: '16px',
    fontWeight: '600',
  };

  const styles3 = {
    fontFamily: 'MontserratAlternates, sans-serif',
    color: '#F9F9F9',
    fontSize: '13px',
    fontWeight: '500',
  };

  const barStyle: CSSProperties = {
    height: '2px',
    backgroundColor: '#00B2CA',
  };

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setEpisodeDetails(data);
        setIsLoading(false);

        // Récupérer les détails des personnages de l'épisode
        const charactersResponse = await Promise.all(data.characters.map(url => fetch(url).then(response => response.json())));
        setCharacters(charactersResponse);
      } catch (error) {
        console.error('Error fetching episode details:', error);
        setIsLoading(false);
      }
    };

    fetchEpisodeDetails();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ backgroundColor: '#4F4F4F', height: '200vh', width: '100vw', position: 'relative' }}>
          <div style={{...styles1, position: 'absolute', top: '121px', left: '58px' }}>
            <h2 style={{ ...styles, textDecoration: 'underline', textDecorationColor: '#00B2CA', textDecorationThickness: '2px' }}>{episodeDetails.name}</h2>
          </div>
          <div>
            <img src={episodeImage} style={{ borderRadius: '6px', position: 'absolute', top: '184px', left: '58px' }}/>
          </div>
          <div style={{...styles1, position: 'absolute', top: '184px', left: '484px' }}>
            <p style={{ paddingBottom: '20px' }}>Episode : {episodeDetails.episode}</p>
            <div style={{...barStyle}}></div>
            <p style={{ paddingBottom: '20px', paddingTop: '20px' }}>Release date : {episodeDetails.air_date}</p>
            <div style={{...barStyle}}></div>
            {episodeDetails && episodeDetails.characters && (
              <p style={{ paddingBottom: '20px', paddingTop: '20px' }}>Characters : {episodeDetails.characters.length}</p>
            )}
            <div style={{...barStyle}}></div>
          </div>
          <div style={{ position: 'absolute', top: '519px', left: '58px' }}>
            {episodeDetails && episodeDetails.characters && (
              <p style={{ ...styles, textDecoration: 'underline', textDecorationColor: '#00B2CA', textDecorationThickness: '2px' }}>{episodeDetails.characters.length} Characters in the episode</p>
            )}
          </div>
          <div style={{ position: 'absolute', top: '580px', left: '58px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            {characters.map((character, index) => (
              <div key={index} style={{ marginRight: '20px', marginBottom: '20px', textAlign: 'center' }}>
                <img src={morty} alt={character.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                <p style={{ color: '#FFF', marginTop: '10px' }}>{character.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
import backgroundImage from '../../public/images/background.png';
import '../fonts.css';
import { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import episodeImage from '../../public/images/episodes.png';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

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
    fontSize: '15px',
    fontWeight: '600',
  };

  const styles3 = {
    fontFamily: 'MontserratAlternates, sans-serif',
    color: '#F9F9F9',
    fontSize: '13px',
    fontWeight: '500',
  };

  const handleSeeMoreClick = (episodeId) => {
    navigate(`/episode/${episodeId}`);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/episode', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div
        className="flex-grow bg-cover bg-no-repeat"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(30%)',
        }}
      ></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '20px', alignSelf: 'flex-start', marginLeft: '11.5%' }}>
          <img src="../../public/images/logo.png" alt="Nom de l'image" style={{ width: '404px', height: '143px' }} />
        </div>
        <div style={{ marginBottom: '20px', alignSelf: 'flex-start', marginLeft: '11.5%' }}>
          <h1 style={{ ...styles, textDecoration: 'underline', textDecorationColor: '#00B2CA', textDecorationThickness: '2px' }}>LASTS EPISODES</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px', width: '100%' }}>
          {posts?.results?.slice(17, 20).map((post, index) => (
            <Card key={index} style={{ backgroundImage: `url(${episodeImage})`, height: '200px', width: '25%', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', gap: '10px', marginTop: 'auto', padding: '10px' }}>
                <CardContent>
                  <Typography style={styles1} variant="h5" component="h2">
                    {isLoading ? 'Loading...' : post.episode}
                  </Typography>
                  <Typography style={styles2} variant="body2" component="h4">
                    {isLoading ? 'Loading...' : post.name}
                  </Typography>
                  <Typography style={styles3} variant="body2" component="h6">
                    {isLoading ? 'Loading...' : post.air_date}
                  </Typography>
                </CardContent>
                <button onClick={() => handleSeeMoreClick(post.id)} style={{
                  ...styles2,
                  width: '115px',
                  height: '32px',
                  padding: '7px 20px',
                  borderRadius: '6px',
                  border: '1px solid #0090A3',
                  background: '#00B2CA',
                  gap: '10px',
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px'
                }}>See more</button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );  
}
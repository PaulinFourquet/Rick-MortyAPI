import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import episodeImage from '../../../public/images/episodes.png';
import '../../fonts.css';
import backgroundImage from '../../../public/images/fondAllEpisode.png';

export default function Episodes() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const episodesPerPage = 6;
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

  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = posts?.results?.slice(indexOfFirstEpisode, indexOfLastEpisode);

  const renderEpisodes = () => {
    const remainingEpisodes = posts?.results?.length - indexOfFirstEpisode;
    let cardHeight = '150px';
    let cardWidth = '30%';
    if (remainingEpisodes === 2) {
      cardWidth = '45%';
    } else if (remainingEpisodes === 1) {
      cardWidth = '60%';
    }
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {currentEpisodes.map((post, index) => (
          <Card key={index} style={{ backgroundImage: `url(${episodeImage})`, height: cardHeight, width: cardWidth, backgroundSize: 'cover', backgroundPosition: 'center', margin: '10px', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', gap: '10px', padding: '20px' }}>
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
              <div style={{ position: 'absolute', bottom: 10, right: 10 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleSeeMoreClick(post.id)}
                >
                  See more
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts?.results?.length / episodesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', zIndex: 0 }}>
      <img
        src={backgroundImage}
        alt="Background Image"
        style={{
          position: 'absolute',
          bottom: '30%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(80%)',
        }}
      />
      <div
        className="flex-grow"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: '20px',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <div style={{ paddingBottom: '22%', alignSelf: 'flex-start', marginLeft: '10.2%', zIndex: 1 }}>
          <h1 style={styles}>ALL EPISODES</h1>
        </div>
        <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '65%', backgroundColor: '#4F4F4F', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px', width: '100%', flexWrap: 'wrap', paddingTop: '2%' }}>
              {renderEpisodes()}
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {pageNumbers.map((number) => (
              <Button
                key={number}
                variant="contained"
                color="primary"
                onClick={() => handlePageChange(number)}
                style={{
                  width: '37px',
                  height: '37px',
                  flexShrink: 0,
                  background: '#0090A3',
                  color: '#FFF',
                  border: '1px solid #00B2CA',
                  margin: '0 5px',
                }}
              >
                {number}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );     
}
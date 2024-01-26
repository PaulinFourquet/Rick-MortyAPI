import axios from 'axios';

const GET = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const GETONE = async (url: string, id: number) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const ApiService = {
  GET: () => GET('https://rickandmortyapi.com/api/character'),
  GETONE: (id: number) => GETONE('https://rickandmortyapi.com/api/character', id),
  GETLOCATION: () => GET('https://rickandmortyapi.com/api/location'),
  GETEPISODE: () => GET('https://rickandmortyapi.com/api/episode'),
};

export default ApiService;
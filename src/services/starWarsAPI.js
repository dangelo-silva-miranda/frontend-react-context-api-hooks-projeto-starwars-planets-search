import fetchAPI from './api';
// import dataList from '../testData';

const STAR_WARS_API = 'https://swapi-trybe.herokuapp.com/api/';
export const endpoint = `${STAR_WARS_API}planets/`;

export const getPlanetsStarWars = async () => {
  try {
    const { results } = await fetchAPI(endpoint);
    return results;
  } catch (error) {
    console.error(error);
    return error;
  }
};

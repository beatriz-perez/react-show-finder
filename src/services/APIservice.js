const ENDPOINT = 'https://api.tvmaze.com/search/shows?q=girls';

const fetchApiInfo = () => fetch(ENDPOINT).then(response => response.json());

export { fetchApiInfo };
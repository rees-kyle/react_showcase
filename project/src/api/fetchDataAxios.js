import axios from 'axios';

export const fetchDataAxios = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      console.log('Fetched data:', response.data); // Logs the fetched data to the console
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};
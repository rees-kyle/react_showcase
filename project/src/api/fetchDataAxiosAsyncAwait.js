import axios from 'axios';

export const fetchDataAxiosAsyncAwait = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Fetched data:', response.data); // Logs the fetched data to the console
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

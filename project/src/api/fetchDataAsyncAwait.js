export const fetchDataAsyncAwait = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

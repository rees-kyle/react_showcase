export const fetchData = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')  // Using a real API endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched data:', data);  // Logs the fetched data to console
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
};

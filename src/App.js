import axios from 'axios';
import React from 'react';
import Photo from './components/Photo';

function App() {
  const [photo, setPhoto] = React.useState('');
  const [results, setResults] = React.useState([]);

  function onSearchChange(event) {
    setPhoto(event.target.value);
  }

  function onSearchClick() {
    const url =
      'https://api.unsplash.com/search/photos?page=1&query=' +
      photo +
      '&client_id=gLSSdfKNMYT6TQr4WU_bBzmf0r5FwHqRkgCqTd9I6Co';
    axios.get(url).then((response) => {
      setResults(response.data.results);
    });
  }

  return (
    <div className="main">
      <h1>Unsplash Photo Search</h1>
      <div className="searchBlock">
        <input onChange={onSearchChange} placeholder="Search photo..." />
        <button onClick={onSearchClick} type="submit">
          Search
        </button>
      </div>
      {results &&
        results.map((photo, id) => (
          <Photo key={id} photoUrl={photo.urls.small} username={photo.user.username} />
        ))}
    </div>
  );
}

export default App;

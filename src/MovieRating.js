import React, { useState } from 'react';

function MovieRating() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleAddMovie = () => {
    if (title.trim() === '' || rating < 1 || rating > 5) return;

    const newMovie = {
      title: title,
      rating: rating
    };

    setMovies([...movies, newMovie]);
    setTitle('');
    setRating(0);
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded">
      <h1 className="text-3xl mb-4">Avaliador de Filmes</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Título do Filme"
          value={title}
          onChange={handleTitleChange}
          className="block w-full px-4 py-2 rounded border-2 border-gray-500 bg-transparent text-white placeholder-gray-500"
        />
      </div>
      <div className="mb-4">
        <select
          value={rating}
          onChange={handleRatingChange}
          className="block w-full px-4 py-2 rounded border-2 border-gray-500 bg-transparent text-white"
        >
          <option value="0" className="text-black">Selecione uma classificação</option>
          <option value="1" className="text-black">1 estrela</option>
          <option value="2" className="text-black">2 estrelas</option>
          <option value="3" className="text-black">3 estrelas</option>
          <option value="4" className="text-black">4 estrelas</option>
          <option value="5" className="text-black">5 estrelas</option>
        </select>
      </div>
      <div>
        <button onClick={handleAddMovie} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Adicionar Filme</button>
      </div>
      {movies.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl mb-2">Filmes Avaliados:</h2>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <strong>{movie.title}</strong> - {movie.rating} estrelas
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieRating;

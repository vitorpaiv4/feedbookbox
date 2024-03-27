
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
    <div className="MovieRating">
      <h1>Avaliador de Filmes</h1>
      <div>
        <input
          type="text"
          placeholder="Título do Filme"
          value={title}
          onChange={handleTitleChange}
        />
        <select value={rating} onChange={handleRatingChange}>
          <option value="0">Selecione uma classificação</option>
          <option value="1">1 estrela</option>
          <option value="2">2 estrelas</option>
          <option value="3">3 estrelas</option>
          <option value="4">4 estrelas</option>
          <option value="5">5 estrelas</option>
        </select>
        <button onClick={handleAddMovie}>Adicionar Filme</button>
      </div>
      <div>
        <h2>Filmes Avaliados:</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <strong>{movie.title}</strong> - {movie.rating} estrelas
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieRating;

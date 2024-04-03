import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('Ação e Aventura');

  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    saveList();
  }, [movies]);

  const loadList = () => {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  };

  const saveList = () => {
    localStorage.setItem('movies', JSON.stringify(movies));
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddMovie = () => {
    if (title.trim() === '' || rating < 1 || rating > 5) return;

    const newMovie = {
      title: title,
      rating: rating,
      comment: comment,
      category: category
    };

    setMovies([...movies, newMovie]);
    setTitle('');
    setRating(0);
    setComment('');
    setCategory('Ação e Aventura');
  };

  const handleRemoveMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  return (
    <div className="bg-slate-800 text-white min-h-screen py-8">
      <div className="container mx-auto flex justify-center items-center">
        <div className='flex-1'>
          <div className="MovieRating">
            <h1 className="text-3xl mb-7">FeedCine</h1>
            <input
              type="text"
              placeholder="Título do Filme"
              value={title}
              onChange={handleTitleChange}
              className="px-4 py-2 w-full rounded border-2 border-gray-500 bg-transparent text-white placeholder-gray-500 mb-4"
            />
            <select
              value={rating}
              onChange={handleRatingChange}
              className="px-4 py-2 w-full rounded border-2 border-gray-500 bg-transparent text-white mb-4"
            >
              <option value="0" className="text-black">Selecione uma classificação</option>
              <option value="1" className="text-black">1 estrela</option>
              <option value="2" className="text-black">2 estrelas</option>
              <option value="3" className="text-black">3 estrelas</option>
              <option value="4" className="text-black">4 estrelas</option>
              <option value="5" className="text-black">5 estrelas</option>
            </select>
            <textarea
              placeholder="Seu comentário"
              value={comment}
              onChange={handleCommentChange}
              className="px-4 py-2 w-full rounded border-2 border-gray-500 bg-transparent text-white mb-4"
            ></textarea>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="px-4 py-2 w-full rounded border-2 border-gray-500 bg-transparent text-white mb-4"
            >
              <option value="Ação e Aventura" className="text-black">Ação e Aventura</option>
              <option value="Drama" className="text-black">Drama</option>
              <option value="Comédia romântica" className="text-black">Comédia romântica</option>
              <option value="Ficção científica" className="text-black">Ficção científica</option>
              <option value="Terror" className="text-black">Terror</option>
              <option value="Animação" className="text-black">Animação</option>
            </select>
            <button onClick={handleAddMovie} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Adicionar Filme</button>
            {movies.length > 0 && (
              <div className="mt-4">
                <h2 className="text-xl mb-2">Filmes Avaliados:</h2>
                <ul>
                {movies.map((movie, index) => (
  <li key={index} className="flex items-center">
    <div className="mr-4">
      <strong>{movie.title}</strong> - {movie.category}
      <br />
      <img src="" alt={movie.title} className="mt-1 h-15" />
    </div>
    <div className='stari'>
      {movie.rating} estrelas
      <div className="comment-box bg-white p-2 rounded-md shadow-md mt-2 inline-block min-w-min">
        <div className="text-black">
          <span className="text-sm">{movie.comment}</span>
        </div>
      </div>
      <button onClick={() => handleRemoveMovie(index)} className="px-2 py-1 ml-2 bg-red-500 text-white rounded hover:bg-red-600">Remover</button>
    </div>
  </li>
))}

                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

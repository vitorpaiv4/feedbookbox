import React, { useState, useEffect } from 'react';
import MovieRating from './MovieRating'; 

function App() {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadLists();
  }, []);

  useEffect(() => {
    saveLists();
  }, [books, movies]);

  const loadLists = () => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }

    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  };

  const saveLists = () => {
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('movies', JSON.stringify(movies));
  };

  const handleBookAddition = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="bg-slate-800 text-white min-h-screen py-8">
      <div className="container mx-auto flex justify-center">
        <div className="w-1/2 mr-4">
          {/* Componente Avaliador de Livros */}
        </div>
        <div className="w-1/2 ml-4">
          {/* Componente Avaliador de Filmes */}
          <MovieRating movies={movies} setMovies={setMovies} onAddMovie={handleBookAddition} />
        </div>
      </div>
    </div>
  );
}

export default App;

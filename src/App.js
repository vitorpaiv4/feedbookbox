import React, { useState, useEffect } from 'react';
import MovieRating from './components/MovieRating';
import BookRating from './components/BookRating';

function App() {
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    saveList();
  }, [books, movies]);

  const loadList = () => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }

    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  };

  const saveList = () => {
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('movies', JSON.stringify(movies));
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleAddBook = () => {
    if (title.trim() === '' || rating < 1 || rating > 5) return;

    const newBook = {
      title: title,
      rating: rating
    };

    setBooks([...books, newBook]);
    setTitle('');
    setRating(0);
  };

  return (
    <div className="bg-slate-800 text-white min-h-screen py-8">
      <div className="container mx-auto flex justify-center items-center">
        <div className='flex-1'>
          <BookRating />
        </div>
        <div className='flex-1'>
          <div className="MovieRating flex flex-col justify-start">
            <MovieRating movies={movies} setMovies={setMovies} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

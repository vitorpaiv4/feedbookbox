import React, { useState } from 'react';
import MovieRating from './MovieRating'; 

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

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
    <div className="App">
      <div className="RatingContainer">
        <div className="BookRating"> {}
          <h1>Avaliador de Livros</h1>
          <div>
            <input
              type="text"
              placeholder="Título do Livro"
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
            <button onClick={handleAddBook}>Adicionar Livro</button>
          </div>
          <div>
            <h2>Livros Avaliados:</h2>
            <ul>
              {books.map((book, index) => (
                <li key={index}>
                  <strong>{book.title}</strong> - {book.rating} estrelas
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="MovieRating"> {}
          <MovieRating />
        </div>
      </div>
    </div>
  );
}

export default App;

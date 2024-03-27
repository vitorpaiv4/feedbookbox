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
    <div className="bg-slate-800 text-white min-h-screen py-8">
      <div className="container mx-auto flex justify-center">
        <div className="w-1/2 mr-4">
          <div className="BookRating">
            <h1 className="text-3xl mb-4">Avaliador de Livros</h1>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Título do Livro"
                value={title}
                onChange={handleTitleChange}
                className="px-4 py-2 w-full rounded border-2 border-gray-500 bg-transparent text-white placeholder-gray-500"
              />
            </div>
            <div className=" mb-4">
              <select
                value={rating}
                onChange={handleRatingChange}
                className="px-4 py-2 w-full rounded border-2 border-gray-500 bg-transparent text-white"
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
              <button onClick={handleAddBook} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Adicionar Livro</button>
            </div>
            <div className="mt-4">
              <h2 className="text-xl mb-2">Livros Avaliados:</h2>
              <ul>
                {books.map((book, index) => (
                  <li key={index}>
                    <strong>{book.title}</strong> - {book.rating} estrelas
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-4">
          <div className="MovieRating">
            <MovieRating />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

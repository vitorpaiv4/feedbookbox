import React, { useState, useEffect } from 'react';

const BookRating = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    saveList();
  }, [books]);

  const loadList = () => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    }
  };

  const saveList = () => {
    localStorage.setItem('books', JSON.stringify(books));
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

  const handleAddBook = () => {
    if (title.trim() === '' || rating < 1 || rating > 5) return;

    const newBook = {
      title: title,
      rating: rating,
      comment: comment  // Adicionando o comentário ao novo livro
    };

    setBooks([...books, newBook]);
    setTitle('');
    setRating(0);
    setComment('');
  };

  return (
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
      <div className="mb-4">
        <textarea
          placeholder="Seu comentário"
          value={comment}
          onChange={handleCommentChange}
          className="px-4 py-2 w-full rounded border-2 border-gray-500 bg-transparent text-white"
        ></textarea>
      </div>
      <div>
        <button onClick={handleAddBook} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Adicionar Livro</button>
      </div>
      {books.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl mb-2">Livros Avaliados:</h2>
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                <strong>{book.title}</strong> - {book.rating} estrelas, Comentário: {book.comment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default BookRating;

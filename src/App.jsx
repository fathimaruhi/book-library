import React from 'react';
import BookCard from './components/BookCard';
import './App.css';

function App() {
  // Books data
  const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      year: 1988,
      description: "A philosophical novel about following your dreams and listening to your heart."
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      year: 2011,
      description: "Explores the history and impact of Homo sapiens on the world."
    },
    {
      title: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      genre: "Mystery",
      year: 1892,
      description: "Classic detective stories featuring the legendary detective Sherlock Holmes."
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Fiction",
      year: 1949,
      description: "A dystopian novel depicting a totalitarian society under constant surveillance."
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Non-Fiction",
      year: 2018,
      description: "A guide on how small habits can create remarkable changes in life."
    }
  ];

  // Calculate most common genre
  const genreCount = {};
  books.forEach(book => {
    genreCount[book.genre] = (genreCount[book.genre] || 0) + 1;
  });
  const mostCommonGenre = Object.keys(genreCount).reduce((a, b) => genreCount[a] > genreCount[b] ? a : b);

  return (
    <div className="App">
      <header>
        <h1>My Book Collection</h1>
        <p>Books That Changed My Perspective</p>
      </header>

      <section className="books-list">
        {books.map((book, index) => (
          <BookCard 
            key={index}
            title={book.title}
            author={book.author}
            genre={book.genre}
            year={book.year}
            description={book.description}
          />
        ))}
      </section>

      <section className="books-summary">
        <p><strong>Total Books:</strong> {books.length}</p>
        <p><strong>Most Common Genre:</strong> {mostCommonGenre}</p>
      </section>

      <footer>
        <p>Created by fathima ruhi| fathimaruhi@gmail.com | © {new Date().getFullYear()} Book Lover</p>
      </footer>
    </div>
  );
}

export default App;

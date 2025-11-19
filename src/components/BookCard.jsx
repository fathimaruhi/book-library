import React from 'react';
import './BookCard.css'; // optional separate styling file

const BookCard = ({ title, author, genre, year, description }) => {
  return (
    <div className="book-card">
      <h3 className="book-title">{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Year:</strong> {year}</p>
      <p className="book-description">{description}</p>
    </div>
  );
};

export default BookCard;

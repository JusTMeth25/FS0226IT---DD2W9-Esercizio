import { Component } from "react";
import books from "../data/fantasy.json";

class ListBooks extends Component {
  render() {
    const { query, onBookClick } = this.props;

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()),
    );

    return (
      <div className="row align-items-start">
        {filteredBooks.map((book) => (
          <div key={book.asin} className="col-4 mb-3">
            <div
              className="card"
              onClick={() => onBookClick(book.asin)}
              style={{ cursor: "pointer" }}
            >
              <img src={book.img} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <p className="card-title">{book.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListBooks;

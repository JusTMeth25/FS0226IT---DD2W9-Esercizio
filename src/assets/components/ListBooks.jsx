import { Component } from "react";
import books from "../data/fantasy.json";

class ListBooks extends Component {
  render() {
    return (
      <div className="row">
        {books.map((book) => (
          <div key={book.asin} className="col-12 col-md-4 col-lg-4">
            <div className="card h-100">
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

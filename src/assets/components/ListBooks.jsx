import { Component } from "react";
import books from "../data/fantasy.json";
import AddComments from "./AddComments";

class ListBooks extends Component {
  state = {
    selectedAsin: null,
  };

  handleBookClick = (asin) => {
    this.setState((prevState) => ({
      selectedAsin: prevState.selectedAsin === asin ? null : asin,
    }));
  };

  render() {
    const { query } = this.props;
    const { selectedAsin } = this.state;

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div className="row align-items-start">
        {filteredBooks.map((book) => (
          <div key={book.asin} className="col-12 col-md-4 col-lg-4 mb-3">
            <div
              className="card"
              onClick={() => this.handleBookClick(book.asin)}
              style={{ cursor: "pointer" }}
            >
              <img src={book.img} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <p className="card-title">{book.title}</p>
              </div>
            </div>

            {selectedAsin === book.asin && (
              <AddComments asin={selectedAsin} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default ListBooks;

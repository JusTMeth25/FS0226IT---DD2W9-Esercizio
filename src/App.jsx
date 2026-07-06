import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Navigation from "./assets/components/Navigation";
import Jumbotron from "./assets/components/Jumbotron";
import ListBooks from "./assets/components/ListBooks";
import Footer from "./assets/components/Footer";
import SearchBooks from "./assets/components/SearchBooks";
import AddComments from "./assets/components/AddComments";

class App extends Component {
  state = {
    query: "",
    selectedAsin: null,
  };

  handleSearch = (value) => {
    this.setState({ query: value });
  };

  handleBookClick = (asin) => {
    this.setState({ selectedAsin: asin });
  };

  render() {
    const { query, selectedAsin } = this.state;

    return (
      <>
        <div className="container w-50 pb-4">
          <Navigation />
          <Jumbotron />
          <SearchBooks onSearch={this.handleSearch} />
          <div className="row align-items-start">
            <div className="col-8">
              <ListBooks query={query} onBookClick={this.handleBookClick} />
            </div>
            <div className="col-4 sticky-top">
              <AddComments asin={selectedAsin} />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;

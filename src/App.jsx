import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navigation from "./assets/components/Navigation";
import Jumbotron from "./assets/components/Jumbotron";
import ListBooks from "./assets/components/ListBooks";
import Footer from "./assets/components/Footer";
import SearchBooks from "./assets/components/SearchBooks";
import AddComments from "./assets/components/AddComments";

function App() {
  const [query, setQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  const handleSearch = (value) => {
    setQuery(value);
  };

  const handleBookClick = (asin) => {
    setSelectedAsin(asin);
  };

  return (
    <>
      <div className="container w-75 pb-4">
        <Navigation />
        <Jumbotron />
        <SearchBooks onSearch={handleSearch} />
        <div className="row align-items-start">
          <div className="col-8">
            <ListBooks query={query} onBookClick={handleBookClick} />
          </div>
          <div className="col-4">
            <AddComments asin={selectedAsin} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

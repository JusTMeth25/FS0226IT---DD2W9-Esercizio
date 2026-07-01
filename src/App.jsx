import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navigation from "./assets/components/Navigation";
import Jumbotron from "./assets/components/Jumbotron";
import ListBooks from "./assets/components/ListBooks";
import Footer from "./assets/components/Footer";
import SearchBooks from "./assets/components/SearchBooks";

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <>
      <div className="container w-50 pb-4">
        <Navigation />
        <Jumbotron />
        <SearchBooks onSearch={handleSearch} />
        <ListBooks query={query} />
        <Footer />
      </div>
    </>
  );
}

export default App;

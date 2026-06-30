import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./assets/components/Navigation";
import Jumbotron from "./assets/components/Jumbotron";
import ListBooks from "./assets/components/ListBooks";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <div className="container w-50 py-4">
        <Navigation />
        <Jumbotron />
        <ListBooks />
         <Footer />
      </div>
    </>
  );
}

export default App;

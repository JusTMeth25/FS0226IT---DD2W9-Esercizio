import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function SearchBooks({ onSearch }) {
  return (
    <>
      <Container className="mb-3">
        <Form.Label htmlFor="inputSearch">Search:</Form.Label>
        <Form.Control
          type="text"
          id="inputSearch"
          placeholder="Search your book"
          onChange={(e) => onSearch(e.target.value)}
        />
      </Container>
    </>
  );
}

export default SearchBooks;

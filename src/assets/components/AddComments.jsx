import { useState, useEffect } from "react";

function AddComments({ asin }) {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
  });
  const [comments, setComments] = useState([]);

  const fetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NTczY2E0NjE0NDAwMTVlMDVjZjgiLCJpYXQiOjE3ODI5OTY4NDgsImV4cCI6MTc4NDIwNjQ0OH0.xx75UqG21gDl4w9NX2P_rN7F2fWGOnT21VZCocth0yY",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setComments(data);
        }
      });
  };

  useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]);

  const handleChange = (field, value) => {
    setComment((prevComment) => ({ ...prevComment, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NTczY2E0NjE0NDAwMTVlMDVjZjgiLCJpYXQiOjE3ODI5OTY4NDgsImV4cCI6MTc4NDIwNjQ0OH0.xx75UqG21gDl4w9NX2P_rN7F2fWGOnT21VZCocth0yY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...comment, elementId: asin }),
    }).then(() => {
      alert("Recensione inviata con successo!");
      fetchComments();
    });
  };

  const handleDelete = (commentId) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + commentId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NTczY2E0NjE0NDAwMTVlMDVjZjgiLCJpYXQiOjE3ODM0MzE5NTQsImV4cCI6MTc4NDY0MTU1NH0.vAZY1ljXNSz4xLWjyMzCwvXcBqTZy7wDlAa9Y5OYSjI",
      },
    }).then(() => {
      alert("Commento eliminato con successo!");
      fetchComments();
    });
  };

  if (!asin) {
    return (
      <div className="mt-4 p-3 border rounded text-muted text-center">
        Seleziona un libro per vedere le recensioni
      </div>
    );
  }

  return (
    <div className="mt-4 mb-4 p-3 border rounded">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Commento</label>
          <textarea
            className="form-control"
            onChange={(e) => handleChange("comment", e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label>Rating</label>
          <select
            className="form-select"
            defaultValue={1}
            onChange={(e) => handleChange("rate", Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
      </form>
      <ul className="list-group">
        {comments.map((c) => (
          <li
            key={c._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {c.comment} — ⭐ {c.rate}
            </span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(c._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddComments;

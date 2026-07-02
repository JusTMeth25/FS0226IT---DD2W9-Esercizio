import { Component } from "react";

class AddComments extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
    comments: [],
  };

  fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NTczY2E0NjE0NDAwMTVlMDVjZjgiLCJpYXQiOjE3ODI5OTY4NDgsImV4cCI6MTc4NDIwNjQ0OH0.xx75UqG21gDl4w9NX2P_rN7F2fWGOnT21VZCocth0yY",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          this.setState({ comments: data });
        }
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  handleChange = (field, value) => {
    this.setState((prevState) => ({
      comment: { ...prevState.comment, [field]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NTczY2E0NjE0NDAwMTVlMDVjZjgiLCJpYXQiOjE3ODI5OTY4NDgsImV4cCI6MTc4NDIwNjQ0OH0.xx75UqG21gDl4w9NX2P_rN7F2fWGOnT21VZCocth0yY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.comment),
    }).then(() => {
      alert("Recensione inviata con successo!");
      this.fetchComments();
    });
  };

  handleDelete = (commentId) => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + commentId,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTQ2NTczY2E0NjE0NDAwMTVlMDVjZjgiLCJpYXQiOjE3ODI5OTY4NDgsImV4cCI6MTc4NDIwNjQ0OH0.xx75UqG21gDl4w9NX2P_rN7F2fWGOnT21VZCocth0yY",
        },
      }
    ).then(() => {
      alert("Commento eliminato con successo!");
      this.fetchComments();
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <div className="mt-4 mb-4 p-3 border rounded">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-2">
            <label>Commento</label>
            <textarea
              className="form-control"
              onChange={(e) => this.handleChange("comment", e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Rating</label>
            <select
              className="form-select"
              defaultValue={1}
              onChange={(e) =>
                this.handleChange("rate", Number(e.target.value))
              }
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
              <span>{c.comment} — ⭐ {c.rate}</span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => this.handleDelete(c._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AddComments;

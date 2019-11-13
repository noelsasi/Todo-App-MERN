import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "./list-item.component";

export default class TodosList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios
      .get("/todos")
      .then(response => {
        console.log(response.data);
        this.setState({ todos: response.data.list });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container col-md-6 bg-light p-4 rounded shadow">
        <Link to="/create" className="btn btn-primary">
          + Create Todo
        </Link>
        <div className="list-container mt-3">
          <ul className="list-group">
            {this.state.todos.map(todo => (
              <List
                key={todo._id}
                id={todo._id}
                title={todo.title}
                description={todo.description}
                bucket={todo.bucket}
                isComplete={todo.isComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

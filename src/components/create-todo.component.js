import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      bucket: "",
      isComplete: false
    };

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this);
    this.onChangeTodoBucket = this.onChangeTodoBucket.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeTodoDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeTodoTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeTodoBucket(e) {
    this.setState({
      bucket: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.description}`);
    console.log(`Todo Responsible: ${this.state.title}`);
    console.log(`Todo Priority: ${this.state.bucket}`);

    const newList = {
      title: this.state.title,
      description: this.state.description,
      bucket: this.state.bucket,
      isComplete: false
    };

    axios.post("/todos/add", newList).then(res => console.log(res.data));

    this.setState({
      description: "",
      title: "",
      bucket: "",
      isComplete: false
    });

    window.location.href = "/";
  }

  render() {
    return (
      <div className="container col-md-4 mt-3 bg-light rounded shadow p-4">
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTodoTitle}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>bucket: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.bucket}
              onChange={this.onChangeTodoBucket}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
          <Link to="/" className="btn btn-light">
            Go to Lists
          </Link>
        </form>
      </div>
    );
  }
}

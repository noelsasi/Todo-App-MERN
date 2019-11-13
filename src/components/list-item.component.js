import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./list-item.css";

class listItem extends Component {
  handleDelete = id => {
    axios.get(`/todos/delete/${id}`, id).then(res => console.log(res.data));
    window.location.href = "/";
  };

  handleComplete = (id, complete) => {
    let todo = {};
    if (complete === true) {
      todo = {
        isComplete: false
      };
    } else {
      todo = {
        isComplete: true
      };
    }
    axios
      .post(`/todos/complete/${id}`, todo)
      .then(res => console.log(res.data));
    window.location.href = "/";
  };

  render() {
    const { id, title, description, bucket, isComplete } = this.props;

    return (
      <li className={this.checkComplete(isComplete)}>
        <div className="item-holder d-flex justify-content-between align-items-center">
          <div className="items-left">
            <h5 className="mb-0">{title}</h5>
            <div className="text-muted">{description}</div>
            <div className="badge badge-warning badge-pill">{bucket}</div>
          </div>
          <div className="items-right">
            <Link to={`edit/${id}`}>
              <button className="btn btn-info btn-sm mr-2 fa fa-pencil"></button>
            </Link>
            <button
              className="btn btn-danger btn-sm fa fa-trash mr-2"
              onClick={() => this.handleDelete(id)}
            ></button>
            <button
              className={this.checkButton(isComplete)}
              onClick={() => this.handleComplete(id, isComplete)}
            ></button>
          </div>
        </div>
      </li>
    );
  }

  checkComplete(isComplete) {
    let classes = "list-group-item";
    if (isComplete === true) {
      classes = "list-group-item list-group-item-light del";
    }
    return classes;
  }

  checkButton(isComplete) {
    let check = "btn btn-secondary btn-sm fa fa-circle";
    if (isComplete === true) {
      check = "btn btn-success btn-sm fa fa-check";
    }
    return check;
  }
}

export default listItem;

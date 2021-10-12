import React from "react";
import "./css/Infographic.css";
import "./css/Statistics.css"
import { FaExpandArrowsAlt } from "react-icons/fa";

export default class Infographic extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  render() {
    return (
      <div className="container">
        <img
          className="stats"
          src={this.props.img}
          alt="no"
        />
        <button 
          className="btn"
          onClick={this.handleShowDialog}>
            Expand <FaExpandArrowsAlt />
        </button>
        {this.state.isOpen && (
          <dialog
            className={this.props.dialog}
            style={{ position: "absolute" }}
            open
            onClick={this.handleShowDialog}
          >
            <img
              className={this.props.expand}
              src={this.props.img}
              onClick={this.handleShowDialog}
              alt="no"
            />
          </dialog>
        )}
      </div>
    );
  }
}

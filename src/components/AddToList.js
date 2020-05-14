import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { getTodoList } from "../redux/selectors"

import '../App.css';

class AddToList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      input: "",
      placeHolder: ""
    };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    let { input } = this.state;
    console.log(this.props.todosLength);
    if(!input){
      this.setState({ placeHolder: "Field is empty" });
    }else{
      this.props.addTodo(input);
      this.setState({ placeHolder: "" });
    }  
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        { this.props.todosLength >= 12 ? (
          <p className="fullList">
            List is full !
          </p>
          ) : (
            <div className="add-container">
              <input
                type="text"
                onChange={e => this.updateInput(e.target.value)}
                value={this.state.input}
                placeholder={this.state.placeHolder}
                autoFocus
              />
              <button className="add-todo" onClick={this.handleAddTodo}>
                Add to the list
              </button>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const todosLength = getTodoList(state).length;
  return { todosLength };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(AddToList);
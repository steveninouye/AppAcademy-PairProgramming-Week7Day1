import React from 'react';
import { uniqueId } from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {title: '', body: ''};
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange (e) {
    this.setState({title: e.target.value});
  }

  handleBodyChange (e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false
    };
    this.props.receiveTodo(todo);
    this.setState({title: "", body: ""});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title
          <input type="text" onChange={this.handleTitleChange} value={this.state.title}/>
        </label>

        <label>Body
          <input type="text" onChange={this.handleBodyChange} value={this.state.body} />
        </label>
        <input type="submit" value="Create Todo"></input>
      </form>
    );
  }
}

export default TodoForm;

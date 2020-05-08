import React from 'react';
import './App.css'

export class Menu extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const text = e.target.value
    this.props.chooseVideo(text);
  }

  render() {
    return (
      <form onClick={this.handleChange}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}
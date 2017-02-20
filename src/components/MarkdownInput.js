import React, { Component } from 'react';
import RenderOutput from './RenderOutput'

class MarkdownInput extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div>
        <form>
          <textarea
            value={this.state.input}
            onChange={e => this.setState({input: e.target.value})}
            name="body" id="" cols="30" rows="10"
          >
          </textarea>
        </form>
        <RenderOutput markdown={this.state.input} />
      </div>

    )
  }
}

export default MarkdownInput;

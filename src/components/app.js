import React, {Component} from 'react';
import marked from 'marked';
import highlightjs from 'highlight.js';

class MarkdownPrev extends Component {
	constructor() {
    super();
    this.state = {markdown: '```js\n console.log("hello"); \n```'}
  }
	handleChange = (e) => {
		this.setState({
			markdown: e.target.value
		})
	}

	markup = () => {

		marked.setOptions({
			renderer: marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: true,
			smartLists: true,
			smartypants: false,
			highlight: function (code) {
				return highlightjs.highlightAuto(code).value
			}
		})

		const markup = marked(this.state.markdown, {sanitize: true})
    markup.replace(/\r?\n/g, '<br />');
		return {
			__html: markup
		}
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<h1 className="text-center">
						ReactJS Markdown Editor
					</h1>
					<div className="col-xs-12 col-sm-6">
						<h3>Markdown</h3>
						<textarea className="markdown" defaultValue={this.state.markdown} onChange={this.handleChange}></textarea>
					</div>
					<div className="col-xs-12 col-sm-6">
						<h3>Preview</h3>
						<div dangerouslySetInnerHTML={this.markup()}></div>
					</div>
				</div>
			</div>
		)
	}
}

export default MarkdownPrev;

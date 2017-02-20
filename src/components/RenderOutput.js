import React from 'react';
import marked from 'marked';

const RenderOutput = (props) => {

  marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
  });

  const text = props.markdown,
  html = marked(text).replace(/\n/g, '  \n')

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
}

export default RenderOutput;

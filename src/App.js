import './App.css';
import React, {useState} from 'react'
import marked from 'marked'

const defaultText = '#Markdown Previewer\n\n #A freeCodeCamp Project '

export default function Markdown() {
  const [text, setText] =useState(defaultText)

function handleChange(event){
  setText(event.target.text)
}

function getRawMarkup() { __html: marked(text)};

  return (
    <div className="App">
    <header><h1 className="Title">Markdown Previewer</h1></header>
    <textarea 
    defaultValue={text}
    id="editor"
    onChange = {handleChange}
    />
    <div id="preview"
    dangerouslySetInnerHTML={getRawMarkup()}
    />
      <footer className="footer">&copy; 2020 by Hanna Littlefield</footer>
    </div>
  );
}


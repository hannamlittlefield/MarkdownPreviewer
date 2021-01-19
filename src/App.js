import './App.css';
import React, {useState} from 'react'
import marked from 'marked'

const defaultText = '# Markdown Previewer \n\n ## A freeCodeCamp Project \n\n This project is based off of the freeCodeCamp requirements. To learn more about FCC, vist their page [here](https://www.freecodecamp.org/)! \n\n One of the most important pieces of code in this project is the function for raw markup: \n ```\n function getRawMarkup() \n  { \n return {__html: marked(text)}\n``` \n You also need to name your elements with `<div id="elementName">`\n \n **A few of the resources used in this project are:** \n - React \n - Marked \n -Lots of Googling! \n \n If you try out this project and get stuck or frustrated, remember in the words of my mentor: \n > _One of the best ways to learn is by making mistakes._ \n Whenever I got stuck on a problem with this project, I just went for a run! \n ![Image of the legs of a runner](https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'

export default function Markdown() {
  const [text, setText] =useState(defaultText)

function handleChange(event){
  setText(event.target.value)
  console.log(event.target.value)
}

function getRawMarkup() {
  return {__html: marked(text)}
};

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


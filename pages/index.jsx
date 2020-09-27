import React from 'react';
import Showdown from 'showdown';

const placeholderTitle = 'Add a title...';
const placeholderAuthor = 'Add an author...';
const placeholderDate = 'Add a date...';
const placeholderPost = 'Write some content...';

function parseMD()    {
    let title = document.querySelector("#title-input").value;
    let author = document.querySelector("#author-input").value;
    let date = document.querySelector("#date-input").value;
    let body = document.querySelector("#post-markdown").value;
    let text = `#${title || placeholderTitle} \n\n### ${author || placeholderAuthor} | ${date || placeholderDate}\n\n${body || placeholderPost}`
    let converter = new Showdown.Converter();
    document.querySelector("#render").innerHTML = converter.makeHtml(text);
    console.log(converter.makeHtml(text));
}

function HomePage() {
    return (
        <div id="main-frame">
            <section id="editor">
                <div id="title-div">
                    <label htmlFor="title-input">Title</label>
                    <input type="text" name="title" id="title-input" placeholder={placeholderTitle} onChange={parseMD}/>
                </div>

                <div id="author-div">
                    <label htmlFor="author-input">Author</label>
                    <input id="author-input" type="text" name="author" placeholder={placeholderAuthor} onChange={parseMD}/>
                </div>

                <div id="date-div">
                    <label htmlFor="date-input">Date</label>
                    <input id="date-input" type="text" name="date" placeholder={placeholderDate} onChange={parseMD}/>
                </div>

                <div id="post-div">
                    <label htmlFor="post-markdown">Post</label>
                    <textarea name="post" id="post-markdown" cols="30" rows="40" placeholder={placeholderPost} onChange={parseMD}></textarea>
                </div>
            </section>
            <section id="render-section">
                <article id="render">
                    <h1 id="addatitle">{placeholderTitle}</h1>
                    <h3 id="addanauthoraddadate">{placeholderAuthor} | {placeholderDate}</h3>
                    <p>{placeholderPost}</p>
                </article>
                </section>
        </div>
    );
}

export default HomePage;
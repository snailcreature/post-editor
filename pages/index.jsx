import React from 'react';
import Showdown from 'showdown';
import {saveAs} from 'file-saver';

const placeholderTitle = 'Add a title...';
const placeholderAuthor = 'Add an author...';
const placeholderDate = 'Add a date...';
const placeholderPost = 'Write some content...';

const converter = new Showdown.Converter();

function getMarkdown()  {
    let title = document.querySelector("#title-input").value;
    let author = document.querySelector("#author-input").value;
    let date = document.querySelector("#date-input").value;
    let body = document.querySelector("#post-markdown").value;
    body = converter.makeHtml(body);
    return {
        title: title,
        author: author,
        date: date,
        body: body,
    };
}

function parseMD()    {
    let md = getMarkdown();
    let text = `#${md.title || placeholderTitle} \n\n### ${md.author || placeholderAuthor} | ${md.date || placeholderDate}`
    text = converter.makeHtml(text);
    text = `${text}\n\n${md.body}`;
    document.querySelector("#render").innerHTML = text;
}

async function saveJson() {
    let md = getMarkdown();
    let fileName = `${md.title.replaceAll(' ', '_').replaceAll('-', '_').toLowerCase() || 'date'}_${md.date.replaceAll(' ', '-').replaceAll('-', '_').toLowerCase() || 'title'}`
    let out = `const post_${fileName} = ${JSON.stringify(md)};\n\nexport default post_${fileName};`;
    let blob = await new Blob([out], {type: "text/javascript;charset=utf-8"});
    saveAs(blob, `${fileName}.js`);
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

                <div id="save-div">
                    <button id="save-button" type="button" onClick={saveJson}>Save As JSON</button>
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
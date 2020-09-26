import React from 'react';
import Showdown from 'showdown';

function parseMD()    {
    let title = document.querySelector("#title-input").value;
    let author = document.querySelector("#author-input").value;
    let date = document.querySelector("#date-input").value;
    let body = document.querySelector("#post-markdown").value;
    let text = `# ${title} \n### ${author} | ${date}\n${body}`
    let converter = new Showdown.Converter();
    document.querySelector("#render").innerHTML = converter.makeHtml(text);
}

function HomePage() {
    return (
        <div id="main-frame">
            <section id="editor">
                <div id="title-div">
                    <label htmlFor="title-input">Title</label>
                    <input type="text" name="title" id="title-input" onChange={parseMD}/>
                </div>

                <div id="author-div">
                    <label htmlFor="author-input">Author</label>
                    <input id="author-input" type="text" name="author" onChange={parseMD}/>
                </div>

                <div id="date-div">
                    <label htmlFor="date-input">Date</label>
                    <input id="date-input" type="text" name="date" onChange={parseMD}/>
                </div>

                <div id="post-div">
                    <label htmlFor="post-markdown">Post</label>
                    <textarea name="post" id="post-markdown" cols="30" rows="40" onChange={parseMD}></textarea>
                </div>
            </section>
            <section id="render-section"><article id="render"></article></section>
        </div>
    );
}

export default HomePage;
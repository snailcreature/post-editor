import React from 'react';
import Showdown from 'showdown';

function parseMD()    {
    let text = document.querySelector("#post-markdown").value;
    let converter = new Showdown.Converter();
    let markup = converter.makeHtml(text);
    document.querySelector("#render").innerHTML = markup;
}

function HomePage() {
    return (
        <>
            <body>
                <section id="editor">
                    <div id="title-div">
                        <label htmlFor="title-input">Title</label>
                        <input type="text" name="title" id="title-input"/>
                    </div>

                    <div id="author-div">
                        <label htmlFor="author-input">Author</label>
                        <input id="author-input" type="text" name="author"/>
                    </div>

                    <div id="date-div">
                        <label htmlFor="date-input">Date</label>
                        <input id="date-input" type="text" name="date"/>
                    </div>

                    <div id="post-div">
                        <label htmlFor="post-markdown">Post</label>
                        <textarea name="post" id="post-markdown" cols="30" rows="40" onChange={parseMD}></textarea>
                    </div>
                </section>
                <section id="render"></section>
            </body>
        </>
    );
}

export default HomePage;
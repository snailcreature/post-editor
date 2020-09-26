import React from 'react';

function HomePage() {
    return (
        <>
        <script src="https://unpkg.com/showdown/dist/showdown.min.js"></script>
            <body>
                <section id="editor">
                    <div id="author-div">
                        <label htmlFor="author-input">Author</label>
                        <input id="author-input" type="text"/>
                    </div>

                    <div id="date-div">
                        <label htmlFor="date-input">Date</label>
                        <input id="date-input" type="text"/>
                    </div>

                    <div id="post-div">
                        <label htmlFor="post-input">Post</label>
                        <textarea name="post" id="post-markdown" cols="30" rows="40"></textarea>
                    </div>
                </section>
                <section id="render"></section>
            </body>
        </>
    );
}

export default HomePage;
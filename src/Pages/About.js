import React from 'react';

function About() {
    return (
        <div className="About">
            <h1>About the Website</h1>
            <h4>This website was created with ❤️ for a UBC assignment in CPSC 455 to apply our workshop learnings around
                basic
                HTML, CSS and Vanilla JavaScript.</h4>
            <h1>The Website's Creator</h1>
            <img src={require('../resources/profile.jpg')} width="300px" />
            <h2>Josh Tillson</h2>
            <h4> Hello!! <br /> <br />
                I'm a fourth year Business and Computer Science student here at UBC! <br /> <br /> I love trail running,
                cross-country skiing,
                cooking and meeting new people. <br /> <br />
                Feel free to reach out to me on <a href="https://www.linkedin.com/in/joshtillson/"
                    target="_blank">Linkedin</a>
            </h4>
            <h4>
                This semester I look forward to learning more about full stack development and what it's like to work in the
                space. I'm looking to pursue a career in Consulting/Product Management so having a better understanding of
                engineering tasks will be an asset.
            </h4>
        </div>
    );
}

export default About;
import React from "react";
import { CVSection, CVTop, CVBottom, CVParagraph, ProjectLink } from "./styles/Projects.style";

const Projects = () => {
    return (
    <CVSection>
        <CVTop>
            <h2 id='projects'>Projects</h2>
            <CVParagraph>
                A year ago, I graduated from Cambridge with a first class degree in Classics. What I loved about the course was how I was able to draw so many different disciplines together (history, literature, philosophy, art) into one coherent whole. This is why I am drawn to developing across the stack, as I like to work with both form and function.
            </CVParagraph>
            <CVParagraph>
                The following projects I hope demonstrate the range of my abilities. Two of the projects (Tinkl & Recycling Heroes) I helped build at Founders and Coders, where I led on DevOps and UX respectively. The other (Medias Res) I built by myself in my spare time.
            </CVParagraph>
           
        </CVTop>

        <CVBottom>
        <CVParagraph>
                    <ProjectLink href='https://github.com/Fweddi/mediasres'><li>Medias Res</li></ProjectLink>
                    <i>oAuth, REST, node.js</i>
                    A site to see your digital bookshelf.
                    <ProjectLink href='https://github.com/FAC-Sixteen/Tinkl'><li>Tinkl</li></ProjectLink>
                    <i>handlebars, express, PostgreSQL, heroku, travis, tape</i>
                    An app to find the nearest suitable toilet in London.
                    <ProjectLink href='https://github.com/FAC-Sixteen/RE4.W'><li>Recycling Heroes</li></ProjectLink>
                    <i>react.js, p5.js, styled-components, netlify, jest</i>
                    A game to teach kids (and adults) what they can and can't recycle.
            </CVParagraph>
        </CVBottom>


        </CVSection>
    );
}

export default Projects;
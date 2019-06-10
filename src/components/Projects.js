import React from "react";
import PDFfilepath from "../assets/Freddie Preece CV.pdf";
import { ProjectText, ProjectLinks, ProjectAnchor, ProjectSection, ProjectTop, ProjectBottom, ProjectParagraph, ProjectLink, ProjectHeader } from "./styles/Projects.style";

const Projects = () => {
    return (
        <ProjectSection>
            <ProjectAnchor id='projects' />

            <ProjectTop>
                <ProjectHeader>Projects</ProjectHeader>
            </ProjectTop>

            <ProjectBottom>

                <ProjectText>
                    <ProjectParagraph>
                            A year ago, I graduated from Cambridge with a first class degree in Classics. What I loved about the course was how I was able to draw so many different disciplines together (history, literature, philosophy, art) into one coherent whole. This is why I am drawn to developing across the stack, as I like to work with both form and function.
                    </ProjectParagraph>
                    <ProjectParagraph>
                            The following projects I hope demonstrate the range of my abilities. Two of the projects (Tinkl & Recycling Heroes) I helped build at Founders and Coders, where I led on DevOps and UX respectively. The other (Medias Res) I built by myself in my spare time.
                    </ProjectParagraph>
                    <ProjectParagraph>
                            To see more about me, take a look at <a href={PDFfilepath} target='_blank'>my CV</a>.
                    </ProjectParagraph>
                </ProjectText>

                <ProjectLinks>
                    <ProjectParagraph>
                        <ProjectLink href='https://github.com/Fweddi/mediasres' target='_blank'><li>Medias Res</li></ProjectLink>
                        <i>oAuth, REST, node.js</i><br /><br />
                        A site to see your digital bookshelf.
                        <br /><br />
                        <ProjectLink href='https://github.com/FAC-Sixteen/Tinkl' target='_blank'><li>Tinkl</li></ProjectLink>
                        <i>handlebars, express, PostgreSQL, heroku, travis, tape</i><br /><br />
                        An app to find the nearest suitable toilet in London.
                        <br /><br />
                        <ProjectLink href='https://github.com/FAC-Sixteen/RE4.W' target='_blank'><li>Recycling Heroes</li></ProjectLink>
                        <i>react.js, hooks, p5.js, styled-components, netlify, jest</i><br /><br />
                        A game to teach kids (and adults) what they can and can't recycle.<br />
                    </ProjectParagraph>
                </ProjectLinks>
            </ProjectBottom>


        </ProjectSection>
    );
}

export default Projects;
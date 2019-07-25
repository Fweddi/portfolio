import React from "react";
import PDFfilepath from "../assets/Freddie Preece CV.pdf";
import {
  ProjectText,
  ProjectLinks,
  ProjectAnchor,
  ProjectSection,
  ProjectTop,
  ProjectBottom,
  ProjectParagraph,
  ProjectLink,
  ProjectTitle,
  ProjectHeader,
  ProjectSectionHeading,
  ProjectStack,
  ProjectDetails
} from "./styles/Projects.style";

const Projects = () => {
  return (
    <ProjectSection>
      <ProjectAnchor id="projects" />

      <ProjectTop>
        <ProjectSectionHeading>Projects</ProjectSectionHeading>
      </ProjectTop>

      <ProjectBottom>
        <ProjectText>
          <ProjectParagraph>
            A year ago, I graduated from Cambridge with a first class degree in
            Classics. What I loved about the course was how I was able to draw
            so many different disciplines together (history, literature,
            philosophy, art) into one coherent whole. This is why I am drawn to
            developing across the stack, as I like to work with both form and
            function.
          </ProjectParagraph>
          <ProjectParagraph>
            The attached projects demonstrate the range of my abilities. Two of
            the projects (Tinkl & Recycling Heroes) I helped build at Founders
            and Coders, where I led on DevOps and UX respectively. The third
            project (Zappy) I created along with two other FAC alumni as part of
            a digital hackathon.
          </ProjectParagraph>
          <ProjectParagraph>
            To see more about me, take a look at{" "}
            <ProjectLink href={PDFfilepath} target="_blank">
              my CV
            </ProjectLink>
            .
          </ProjectParagraph>
        </ProjectText>

        <ProjectLinks>
          <ProjectParagraph>
            <ProjectDetails>
              <ProjectHeader>
                <ProjectTitle>Tinkl</ProjectTitle> (
                <ProjectLink
                  href="https://github.com/FAC-Sixteen/Tinkl"
                  target="_blank"
                >
                  repo
                </ProjectLink>
                ,{" "}
                <ProjectLink
                  href="https://tinkl.herokuapp.com/"
                  target="_blank"
                >
                  demo
                </ProjectLink>
                )
              </ProjectHeader>
              <ProjectStack>
                handlebars, express, PostgreSQL, heroku, travis, tape
              </ProjectStack>
              An app to find your nearest suitable toilet in London.
            </ProjectDetails>
            <ProjectDetails>
              <ProjectHeader>
                <ProjectTitle>Recycling Heroes</ProjectTitle> (
                <ProjectLink
                  href="https://github.com/FAC-Sixteen/RE4.W"
                  target="_blank"
                >
                  repo
                </ProjectLink>
                ,{" "}
                <ProjectLink
                  href="https://recycling-heroes.netlify.com/"
                  target="_blank"
                >
                  demo
                </ProjectLink>
                )
              </ProjectHeader>
              <ProjectStack>
                react.js, hooks, react d&d, styled-components, netlify, jest
              </ProjectStack>
              A game to teach kids (and adults) what they can and can't recycle.
            </ProjectDetails>
            <ProjectDetails>
              <ProjectHeader>
                <ProjectTitle>Zappy</ProjectTitle> (
                <ProjectLink
                  href="https://github.com/Fweddi/zappy"
                  target="_blank"
                >
                  repo
                </ProjectLink>
                ,{" "}
                <ProjectLink
                  href="https://chrome.google.com/webstore/detail/zappy/ejceghnmgiembcbacnnoepnakkjbemab"
                  target="_blank"
                >
                  demo
                </ProjectLink>
                )
              </ProjectHeader>
              <ProjectStack>
                HTML, CSS, JavaScript, CircleCI, Chrome Web Store
              </ProjectStack>
              A chrome extension to help you buy clothes as long term
              investments.
            </ProjectDetails>
          </ProjectParagraph>
        </ProjectLinks>
      </ProjectBottom>
    </ProjectSection>
  );
};

export default Projects;

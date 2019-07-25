import styled from "styled-components";

const ProjectAnchor = styled.a`
display: block;
position: absolute;
top: -10vh;
visibility: hidden;
`;

const ProjectSection = styled.section`
width: 100vw;
height: 90vh;
display: flex;
position: relative;
flex-flow: column wrap;
justify-content: center;
align-items: center;
background-color: #FBF9FE;
@media only screen and (max-width:900px) {
  flex-direction: column;
  height: auto;
}
`;

const ProjectTop = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const ProjectBottom = styled.div`
  width: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width:900px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  padding: 1em;
  @media only screen and (max-width:900px) {
  border-bottom: 1px solid black;
  }
`;

const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 80%;
  align-items: center;
`;

const ProjectParagraph = styled.p`
  font-family: "Cutive Mono", monospace;
  font-size: 1rem;
  height: auto;
  width: 90%;
  color: black;
`;

const ProjectLink = styled.a`
  text-decoration: underline;
`;

const ProjectTitle = styled.span`
font-family: 'Julius Sans One', sans-serif;
margin: 0.5em 0em;
`
const ProjectHeader = styled.header`
  
`;

const ProjectStack = styled.div`
  font-style: italic;
  margin: 0.2em 0 1em 0;
`;

const ProjectSectionHeading = styled.h2`
  font-family: "Cutive Mono", monospace;
  color: black;
  padding-top: 1em;
`;

const ProjectDetails = styled.div`
  margin: 1em 0em;
`

export {
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
  ProjectStack,
  ProjectSectionHeading,
  ProjectDetails
};

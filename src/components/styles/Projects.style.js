import styled from "styled-components";

const ProjectAnchor = styled.a`
display: block;
position: relative;
top: -10vh;
visibility: hidden;
`;

const ProjectSection = styled.section`
width: 100vw;
height: 90vh;
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
background-color: #FBF9FE;
@media only screen and (max-width:768px) {
  flex-direction: column;
  height: auto;
}
`;

const ProjectTop = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  @media only screen and (max-width:768px) {
    width: 100vw;
  }
`;

const ProjectBottom = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProjectParagraph = styled.p`
  font-family: "Cutive Mono", monospace;
  font-size: 1rem;
  height: auto;
  width: 90%;
  color: black;
`;

const ProjectLink = styled.a`
  // color: black;
`;

const ProjectHeader = styled.h2`
  font-family: "Cutive Mono", monospace;
  color: black;
`;

export {
  ProjectAnchor,
  ProjectSection,
  ProjectTop,
  ProjectBottom,
  ProjectParagraph,
  ProjectLink,
  ProjectHeader
};

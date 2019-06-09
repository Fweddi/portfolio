import styled from "styled-components";

const CVSection = styled.section`
width: 100vw;
min-height: 100vh;
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
background-color: #FBF9FE;
`;

const CVTop = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const CVBottom = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CVParagraph = styled.p`
  font-family: "Cutive Mono", monospace;
  font-size: 1rem;
  height: auto;
  width: 90%;
  color: black;
`;

const ProjectLink = styled.a`
  color: black;
`;

export {
  CVSection,
  CVTop,
  CVBottom,
  CVParagraph,
  ProjectLink
};

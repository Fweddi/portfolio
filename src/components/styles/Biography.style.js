import styled from "styled-components";

const BioAnchor = styled.a`
    display: block;
    position: relative;
    top: -55vh;
    visibility: hidden;
`;

const BioSection = styled.section`
  width: 100vw;
  min-height: 90vh;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  background-color: #60677F;
`;

const BioHeader = styled.a`
  font-family: "Cutive Mono", monospace;
  color: #FBF9FE;
`;

const BioTop = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BioBottom = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const BioImage = styled.img`
  max-height: 80vh;
  border: solid 1px #FBF9FE;
`

const BioParagraph = styled.p`
  font-family: "Cutive Mono", monospace;
  font-size: 1rem;
  height: auto;
  width: 80%;
  color: #FBF9FE;
`;

export {
    BioAnchor,
    BioSection,
    BioTop,
    BioBottom,
    BioImage,
    BioParagraph,
    BioHeader
}
import styled from "styled-components";

const BioSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  background-color: #60677F;
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
    BioSection,
    BioTop,
    BioBottom,
    BioImage,
    BioParagraph
}
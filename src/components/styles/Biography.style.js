import styled from "styled-components";

const BioAnchor = styled.a`
    display: block;
    position: relative;
    top: -55vh;
    visibility: hidden;
    @media only screen and (max-width:768px) {
      top: 10vh;
    }
`;

const BioSection = styled.section`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #60677F;
  @media only screen and (max-width:768px) {
    flex-direction: column;
    height: auto;
  }
`;

const BioHeader = styled.h2`
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
  @media only screen and (max-width:768px) {
    width: auto;
  }
`;

const BioImage = styled.img`
  max-height: 80vh;
  border: solid 1px #FBF9FE;
  margin: 1em;
  @media only screen and (max-width:768px) {
    height: 30vh;
  }
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
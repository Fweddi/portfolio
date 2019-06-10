import styled from "styled-components";

const BioAnchor = styled.a`
    display: block;
    position: absolute;
    top: -10vh;
    visibility: hidden;
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`;

const BioSection = styled.section`
  width: 100vw;
  height: auto;
  min-height: 90vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #60677F;
  @media only screen and (max-width:768px) {
    flex-direction: column;
    height: auto;
  }
`;

const BioHeader = styled.h2`
  font-family: "Cutive Mono", monospace;
  color: #FBF9FE;
  padding-top: 1em;
`;

const BioTop = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BioBottom = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
  @media only screen and (max-width:768px) {
    width: auto;
    flex-direction: column;
  }
`;

const BioImage = styled.img`
  width: 30vw;
  border: solid 1px #FBF9FE;
  margin-left: 2em;
  @media only screen and (max-width:768px) {
    width: 40vh;
    margin: 1em;
  }
`

const BioParagraph = styled.p`
  font-family: "Cutive Mono", monospace;
  font-size: 1rem;
  height: auto;
  width: 90%;
  color: #FBF9FE;
`;

export {
    BioContainer,
    BioAnchor,
    BioSection,
    BioTop,
    BioBottom,
    BioImage,
    BioParagraph,
    BioHeader
}
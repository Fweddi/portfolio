import styled, { keyframes } from "styled-components";

const HeaderSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: #FBF9FE;
`;

const HeaderTop = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderBottom = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const Paragraph = styled.p`
  font-family: "Cutive Mono", monospace;
  font-size: 1rem;
  text-align: center;
  height: auto;
  width: 80%;
  margin-block-end: 0em;
`;

const KeillerGif = styled.img`
  max-height: 50vh;
  margin: 1em;
  border: solid 1px black;
`;

const Attribution = styled.a`
  color: black;
  font-family: "Cutive Mono", monospace;
  text-align: center;
  margin-block-start: 1em;
`

const Arrow = styled.a`
  font-family: "Cutive Mono", monospace;
  color: black;
  margin-top: 1em;
  text-align: center;
  text-decoration: none;
  opacity: 0;
  animation: ${props => blink(props)} 1s linear 20s 3 forwards;
`

const blink = props => {
  return keyframes`
	0% {opacity: 0}
	49%{opacity: 0}
  50% {opacity: 1}
  100% {opacity: 1}
`;
};

const animation = props => {
  return keyframes`
  0% { 
    width: 0%;
  }

  100% {
    width: ${props.length}ch;
  }
`;
};

const animationreverse = props => {
  return keyframes`
  0% { 
    width: ${props.length}ch;
    left: auto;
    right: 0;
  }

  100% {
    width: 0%;
    left: auto;
    right: 0;
  }
`;
};

const Redacted = styled.span`
  position: relative;
  font-family: "Cutive Mono", monospace;
  white-space: pre;
  pointer-events: ${props => props.pointerevents};
  cursor: ${props => props.cursor};
  text-decoration: none;
  color: black;

  ::after {
    background: black;
    border-radius: 0.1em;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.35);
    content: "";
    height: 1.2em;
    left: 0;
    display: inline-block;
    width: 0%;
    animation: ${props => animation(props)} ${props => props.duration}s linear ${props => props.delay}s
        forwards,
      ${props => animationreverse(props)} 2s linear 18s forwards;
    position: absolute;
    transform: skewY(-5deg) rotate(5deg);
  }
`;

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
  HeaderTop,
  HeaderBottom,
  HeaderSection,
  Paragraph,
  KeillerGif,
  Redacted,
  Attribution,
  Arrow,
  BioSection,
  BioTop,
  BioBottom,
  BioImage,
  BioParagraph,
  CVSection,
  CVTop,
  CVBottom,
  CVParagraph,
  ProjectLink
};

import styled, { keyframes } from 'styled-components';

const HeaderSection = styled.section`
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `
const Paragraph = styled.p`
    font-family: 'IBM Plex Mono', monospace;
    text-align: center;
    padding: 0em 5em;
    `;

const KeillerGif = styled.img`
    width: 25em;
    padding: 2em;
`;

const animation = (props) => {
  return keyframes`
  0% { 
    width: 0%;
  }

  100% {
    width: ${props.length}ch;
  }
`}

const Redacted = styled.span`
    position: relative;
    font-family: 'IBM Plex Mono', monospace;
    white-space: pre;
    
    ::after {
          background: black;
          border-radius: 0.1em;
          box-shadow: 0 0 1px rgba(0,0,0,0.35);
          content: "";
          height: 1.2em;
          left: 0;
          display: inline-block;
          width: 0%;
          animation: ${props => animation(props)} 2s linear 2s forwards, ${props => animation(props)} 2s linear 6s reverse forwards;
          position: absolute;
          transform: skewY(-5deg) rotate(5deg);
        }
      `;
    

export { HeaderSection, Paragraph, KeillerGif, Redacted };





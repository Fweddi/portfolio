import styled, { keyframes } from 'styled-components';
import App from './index';

const HeaderSection = styled.section`
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `
const Paragraph = styled.p`
    font-family: 'Special Elite';
    text-align: center;
    padding: 0em 5em;
    `;

const KeillerGif = styled.img`
    width: 25em;
    padding: 2em;
    animation: ${showHide} 5s ease-in;
`;

const showHide = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const Redacted = styled.span`
    position: relative;
    font-family: 'Special Elite';
    white-space: pre;
    
    ::after {
          background: black;
          border-radius: 0.1em;
          box-shadow: 0 0 1px rgba(0,0,0,0.35);
          content: " ";
          height: 1.2em;
          display: inline-block;
          animation: ${showHide} 2s ease-in forwards;
          left: 0;
          position: absolute;
          transform: skewY(-5deg) rotate(5deg);
        }
      `;

export { HeaderSection, Paragraph, KeillerGif, Redacted, showHide };





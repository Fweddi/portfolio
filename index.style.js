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
    font-family: 'Special Elite';
    text-align: center;
    padding: 0em 5em;
    `;

const KeillerGif = styled.img`
    width: 25em;
    padding: 2em;
    // animation: ${showHide} 5s ease-in;
`;

export { HeaderSection, Paragraph, KeillerGif };




const showHide = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;
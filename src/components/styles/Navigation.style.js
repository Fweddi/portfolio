import styled from "styled-components";

const NavBar = styled.header`
width: 100vw;
height: 10vh;
position: fixed;
top: 0;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: solid 1px black;
`

const NavHeading = styled.p`
color: black;
padding: 0em 2em;
font-family: 'Julius Sans One', sans-serif;
letter-spacing: 0.5em;
`
const NavLink = styled.a`
color: black;
font-family: "Cutive Mono", monospace;
text-decoration: none;
padding: 0em 2em;
`;

export {
    NavBar,
    NavLink,
    NavHeading
  };
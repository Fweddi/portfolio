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
z-index: 2;
`

const NavHeading = styled.a`
color: black;
margin: 0em 2em;
text-decoration: none;
font-family: 'Julius Sans One', sans-serif;
letter-spacing: 0.5em;

@media only screen and (max-width:768px) {
  font-size: 0.8em;
}
`

const NavSound = styled.span`
  color: black;
  font-family: "Cutive Mono", monospace;
  padding: 0em 2em;
  align-self: center;
`

const NavLink = styled.a`
color: black;
font-family: "Cutive Mono", monospace;
text-decoration: none;
padding: 0em 2em;
width: auto;
@media only screen and (max-width:768px) {
  padding: 0em 1em;
  font-size: 0.8em;
}

`;

export {
    NavBar,
    NavLink,
    NavHeading,
    NavSound
  };
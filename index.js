import React from "react";
import { render } from "react-dom";
import keillerFilePath from "./assets/keiller.gif";
import styled from 'styled-components';
import { HeaderSection, Paragraph, KeillerGif } from './index.style';

const App = () => {
    const [ Width, setWidth ] = React.useState(0);

    const increment = () => {
        setWidth(oldWidth => (oldWidth >= 100 ? 100 : oldWidth + 1));
    };

    React.useEffect(() => {
        const incrementInterval = window.setInterval(increment, 1);
        return () => window.clearInterval(incrementInterval);
    }, []);

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
      width: ${Width}%;
      left: 0;
      position: absolute;
      transform: skewY(-5deg) rotate(5deg);
    }
  `;
  
    return (
        <HeaderSection>
            <KeillerGif src={keillerFilePath} />
            <Paragraph>
                Networks of <Redacted>property</Redacted> developments create zones of control, landscapes pulsing with symbolism and intent.
            </Paragraph>

            {/* <Paragraph>
            As architecture becomes nomadic, there are encounters, the splintering of ideologies, beliefs and desires.
            </Paragraph> */}

            <Paragraph>
                The signs are everywhere – you hear the faint crackling of power, notice where it lies… encoded, encrypted… not concentrated in the City of London or Canary Wharf, but dispersed, iridescent in <Redacted>Italianate gardens</Redacted>, <Redacted>chequerboard paving</Redacted>, <Redacted>columns and neoclassical facades…</Redacted>
            </Paragraph>

            <Paragraph>
                – Laura Grace Ford
            </Paragraph>

        </HeaderSection>
    )
}



render(<App />, document.getElementById("root"));
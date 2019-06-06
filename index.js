import React from "react";
import { render } from "react-dom";
import keillerFilePath from "./assets/keiller.gif";
import { HeaderSection, Paragraph, KeillerGif, Redacted } from './index.style';

const App = () => {

    return (
        <HeaderSection>
            <KeillerGif src={keillerFilePath} />
            <Paragraph>
                Networks of <Redacted delay='4'>property</Redacted> developments create zones of control, landscapes pulsing with symbolism and intent.
            </Paragraph>

            {/* <Paragraph>
            As architecture becomes nomadic, there are encounters, the splintering of ideologies, beliefs and desires.
            </Paragraph> */}

            <Paragraph>
                The signs are everywhere – you hear the faint crackling of power, notice where it lies… encoded, encrypted… not concentrated in the City of London or Canary Wharf, but dispersed, iridescent in <Redacted delay='12'>Italianate gardens</Redacted>, <Redacted delay='14'>chequerboard paving</Redacted>, <Redacted delay='16'>columns and neoclassical facades…</Redacted>
            </Paragraph>

            <Paragraph>
                – Laura Grace Ford
            </Paragraph>

        </HeaderSection>
    )
}

render(<App />, document.getElementById("root"));
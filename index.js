import React from "react";
import { render } from "react-dom";
import keillerFilePath from "./assets/keiller.gif";
import { HeaderSection, Paragraph, KeillerGif, Redacted } from './index.style';

const App = () => {

    // Set up states for width of 'redacted' text, increasing redaction by 1% every 1? ms.
    const [ Width, setWidth ] = React.useState(0);

    const increment = () => {
        setWidth(oldWidth => (oldWidth >= 100 ? 100 : oldWidth + 1));
    };

    React.useEffect(() => {
        const incrementInterval = window.setInterval(increment, 1);
        return () => window.clearInterval(incrementInterval);
    }, []);

    return (
        <HeaderSection>
            <KeillerGif src={keillerFilePath} />
            <Paragraph>
                Networks of <Redacted width={Width}>property</Redacted> developments create zones of control, landscapes pulsing with symbolism and intent.
            </Paragraph>

            {/* <Paragraph>
            As architecture becomes nomadic, there are encounters, the splintering of ideologies, beliefs and desires.
            </Paragraph> */}

            <Paragraph>
                The signs are everywhere – you hear the faint crackling of power, notice where it lies… encoded, encrypted… not concentrated in the City of London or Canary Wharf, but dispersed, iridescent in <Redacted width={Width}>Italianate gardens</Redacted>, <Redacted width={Width}>chequerboard paving</Redacted>, <Redacted width={Width}>columns and neoclassical facades…</Redacted>
            </Paragraph>

            <Paragraph>
                – Laura Grace Ford
            </Paragraph>

        </HeaderSection>
    )
}

render(<App />, document.getElementById("root"));
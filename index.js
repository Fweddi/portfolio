import React from "react";
import { render } from "react-dom";
import keillerFilePath from "./assets/keiller.gif";
import { HeaderSection, Paragraph, KeillerGif, Redacted } from './index.style';

const App = () => {

    const RedactedInfo = {
        info1: 'property', 
        info2: 'Italianate gardens, chequerboard paving,', 
        info3: 'columns and neoclassical facades…'
    }

    const [object, setObject] = React.useState(RedactedInfo);

    // const storeRedactedInfoLength = {

    // }

    const changeRedactedInfo = () => {
        const newRedactedInfo = {
            info1: 'digital ',
            info2: 'Google, Amazon, Facebook.               ',
            info3: '                                 ', 
        }
        setObject(newRedactedInfo);

    }

    // window.setTimeout(changeRedactedInfo, 5000);

    React.useEffect(() => {
        const redactedTimeout = window.setTimeout(changeRedactedInfo, 5000);
        return () => window.clearTimeout(redactedTimeout);
    }, [])

    return (
        <HeaderSection>
            <KeillerGif src={keillerFilePath} />

            <Paragraph>
                Networks of <Redacted duration='2'delay='4' children={object.info1} length={(object.info1).length}/> developments create zones of control, landscapes pulsing with symbolism and intent.
            </Paragraph>

            {/* <Paragraph>
            As architecture becomes nomadic, there are encounters, the splintering of ideologies, belief and desires.
            </Paragraph> */}

            <Paragraph>
                The signs are everywhere – you hear the faint crackling of power, notice where it lies… encoded, encrypted… not concentrated in the City of London or Canary Wharf, but dispersed, iridescent in <Redacted duration = '2' delay='10' children={object.info2} length={(object.info2).length}/> <Redacted duration = '3.5' delay='10' children={object.info3} length={(object.info3).length} />
            </Paragraph>

            <Paragraph>
                – Laura Grace Ford
            </Paragraph>

        </HeaderSection>
    )
}

render(<App />, document.getElementById("root"));
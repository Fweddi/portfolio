import React from "react";
import { render } from "react-dom";
import keillerFilePath from "./assets/keiller.gif";
import { HeaderSection, HeaderTop, HeaderBottom, Paragraph, KeillerGif, Redacted, Attribution, Arrow } from './index.style';

const App = () => {
    const infoObject = {
        i1: 'property',
        i2: 'Italianate gardens',
        i3: 'chequerboard paving',
        i4: 'neoclassical facades…',
        attribution: '– Laura Grace Ford, psychogeographer',
        link: 'http://lauragraceford.blogspot.com/'
    }

    const aDuration = (i) => i.length / 15;

    const [info, setInfo] = React.useState(infoObject);

    const changeInfo = () => {
        const newInfoObject = {
            i1: 'digital ',
            i2: ' targeted adverts ',
            i3: ' messenger bubbles ',
            i4: ' autocomplete fields…',
            attribution: '– Freddie Preece, full stack developer',
            link: ''
        }
        setInfo(newInfoObject);
    }

    React.useEffect(() => {
        const redactedTimeout = window.setTimeout(changeInfo, 17000);
        return () => window.clearTimeout(redactedTimeout);
    }, [])

    return (
        <HeaderSection>
            <HeaderTop>
                <KeillerGif src={keillerFilePath} />
            </HeaderTop>
            <HeaderBottom>
                <Paragraph>
                    Networks of <Redacted duration={aDuration(info.i1)} delay='5' children={info.i1} length={info.i1.length} /> developments create zones of control, landscapes pulsing with symbolism and intent.
                </Paragraph>
                <Paragraph>
                    The signs are everywhere – you hear the faint crackling of power, notice where it lies… encoded, encrypted… not concentrated in the City of London or Canary Wharf, but dispersed, iridescent in <Redacted
                        duration={aDuration(info.i2)}
                        delay={aDuration(info.i1) + 10}
                        children={info.i2}
                        length={info.i2.length} />, <Redacted
                        length={info.i3.length}
                        duration={aDuration(info.i3)}
                        delay={aDuration(info.i1) + 10 + aDuration(info.i2)}
                        children={info.i3}
                    />, <Redacted
                        length={info.i4.length}
                        duration={aDuration(info.i4)}
                        delay={aDuration(info.i1) + 10 + aDuration(info.i2) + aDuration(info.i3)}
                        children={info.i4}
                        href={info.link}
                    />
                </Paragraph>
                <Attribution href={info.link}>{info.attribution}</Attribution>
            </HeaderBottom>
            <Arrow> ↓ </Arrow>
        </HeaderSection>
    )
}

render(<App />, document.getElementById("root"));
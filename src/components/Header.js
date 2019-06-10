import React from "react";
import { HeaderAnchor, HeaderSection, HeaderTop, HeaderBottom, Paragraph, KeillerGif, Redacted, Attribution, Arrow } from './styles/Header.style.js';
import keillerFilePath from "../assets/keiller.gif";

const aDuration = (i) => i.length / 15;

const Header = ({info}) => {
    return (
        <HeaderSection>
            <HeaderAnchor id='header'/>
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
                <Arrow href='#about'> ↓ </Arrow>
            </HeaderBottom>
        </HeaderSection>
    )
}

export default Header;

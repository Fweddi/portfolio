import React from "react";
import { render } from "react-dom";
import keillerFilePath from "./assets/keiller.gif";
import bioFilePath from "./assets/Freddie.jpg";
import { HeaderSection, HeaderTop, HeaderBottom, Paragraph, KeillerGif, Redacted, Attribution, Arrow, BioSection, BioImage, BioTop, BioBottom, BioParagraph, CVSection, CVTop, CVBottom, CVParagraph } from './index.style';

const App = () => {
    const infoObject = {
        i1: 'property',
        i2: 'Italianate gardens',
        i3: 'chequerboard paving',
        i4: 'neoclassical facades…',
        attribution: 'Laura Grace Ford, psychogeographer',
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
            attribution: 'Freddie Preece, full stack developer',
            link: '#bio'
        }
        setInfo(newInfoObject);
    }

    React.useEffect(() => {
        const redactedTimeout = window.setTimeout(changeInfo, 17000);
        return () => window.clearTimeout(redactedTimeout);
    }, [])

    return (
        <div>
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
                <Arrow href='#bio'> ↓ </Arrow>
            </HeaderBottom>
        </HeaderSection>

        <BioSection id='bio'>
            <BioTop>
            <BioImage src={bioFilePath} />
            </BioTop>
            <BioBottom>
            <BioParagraph><h2 id='about'>About Me</h2>Hi, I'm Freddie, an aspiring full stack developer. For the last four months I have been honing my skills at Founders and Coders, an incredible not-for-profit bootcamp that survives on the principle of peer-led learning. The people I've met here in Finsbury Park have not only become great programmers, but great friends too.
            </BioParagraph>
            <BioParagraph> 
            Walking through Finsbury Park each day, you see so much. Friends reunite, drivers clash; strangers smoke and partners part. It's hard to pinpoint the impulse that drives this place, but it definitely wouldn't be the same without its architecture. Between the pavecracks and the arches, the bottlenecks and the mosque, there's something irresistable and irreducable here shaping the way we think.
            </BioParagraph>
            <BioParagraph>
            Halfway through the course, I realised that the web works the same way. Each website is a building, with the web our path between them. As a developer, I want to build websites that leave a lasting mark on those that read my work, in the same way that Finsbury Park has left a lasting impression on me.
            </BioParagraph>
            
            </BioBottom>
        </BioSection>

        <CVSection>
        <CVTop>
            <CVParagraph>
                A year ago, I graduated from Cambridge with a first class degree in Classics. What I loved about the course was how I was able to draw so many different disciplines together (history, literature, philosophy, art) into one coherent whole. This is why I am drawn to developing across the stack, as I like to work with both form and function.


            </CVParagraph>
        </CVTop>

        <CVBottom>
            <CVParagraph>
                Projects:
                <ul>
                    <li>medias res</li>
                    <i>oAuth, REST, node.js</i>
                    <li>tinkl</li>
                    <i>handlebars, express, PostgreSQL, heroku, travis, tape</i>
                    <li>recycling heroes</li>
                    <i>react.js, p5.js, styled-components, netlify, jest</i>
                </ul>
            </CVParagraph>

            <CVParagraph>
                CV here.
            </CVParagraph>

        </CVBottom>


        </CVSection>
        </div>
    )
}

render(<App />, document.getElementById("root"));
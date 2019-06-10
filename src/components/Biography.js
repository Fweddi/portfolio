    
import React from "react";
import bioFilePath from "../assets/Freddie.jpg";
import { BioAnchor, BioSection, BioImage, BioTop, BioBottom, BioParagraph, BioHeader } from "./styles/Biography.style";

const Biography = () => {
    return (
    <BioSection>
            <BioAnchor id='about'/> 
            <BioTop>
                <BioImage src={bioFilePath} />
            </BioTop>
            <BioBottom>
                <BioHeader>About Me</BioHeader>
                <BioParagraph>Hi, I'm Freddie, an aspiring full stack developer. For the last four months I have been honing my skills at Founders and Coders, an incredible not-for-profit bootcamp that survives on the principle of peer-led learning. The people I've met here in Finsbury Park have not only become great programmers, but great friends too.
                </BioParagraph>
                <BioParagraph> 
                Walking through Finsbury Park each day, you see so much. Friends reunite, drivers clash; strangers smoke and lovers part. It's hard to pinpoint the impulse that drives this place, but it definitely wouldn't be the same without its architecture. Between the pavecracks and the arches, the bottlenecks and the mosque, there's something irresistable and irreducable here shaping the way we think.
                </BioParagraph>
                <BioParagraph>
                Halfway through the course, I realised that the web works the same way. Each website is a building, with the web our path between them. As a developer, I want to build websites that leave a lasting mark on those that read my work, in the same way that Finsbury Park has left a lasting impression on me.
                </BioParagraph>
            </BioBottom>
        </BioSection>
    );
}

export default Biography;
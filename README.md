# Developing my portfolio

## The Design

![](https://i.imgur.com/JrUTi63.jpg)


For my portfolio, I wanted to design a space and experience different to other sites on the web, whilst bringing across my own personality and interests. 

Since I first learnt about the history of the web's infrastructure, and those optical fibres slithering their way across the ocean floor, the physical aspect of the web has had me hooked. The first transatlantic cables were laid all the way back in 1858. To put that into perspective, the Crimean War had only just reached its bitter end, and the Origin of Species had yet to be published! 

Sure - they were laid for telegraphy, not internet, but for all intents and purposes these are the same thing. Take the 1880 novel 'Wired Love: a Romance of Dots and Dashes', penned by the female playwright (and telegraph operator!) Ella Thayer. It's a tale of online romance, replete with catfishing and morse sexting!

Today it's the same story, in different times. All that has changed is the media through which we connect. I wanted to draw upon that physicality when designing this portfolio. Digital terms are often born as physical metaphors: think *web*, *net*, *window*. When designing websites, we often think solely in terms of art design, and I find this strange, because the original root of *website* seems to suggest architecture, space. That is not to suggest art is independent of architecture, but I wanted to design this site with both in mind.

### Architecture

![](https://i.imgur.com/1acSpIy.jpg)

My interest in architecture began as a joke. At university, a friend invited me into what at the time I assumed was a meme group, the Brutalism Appreciation Society. I had grown up thinking brutalism an eye-sore, and assumed other people did so too. But this cabal I had infiltrated not only appreciated brutalism, but adored it. They saw the same grey concrete as me, the same curves and cuts rising high into the skyline, and saw hope where I saw despair.

Over time, the concrete thawed my heart. My new-found love for brutalism spread back in time to modernism and Bauhaus, and ahead to post-war social housing and Cold War complexes across the Soviet mezzanine. Larkin's *High Windows* finally began to make sense, and I learnt to view the world around me in a different, perhaps even radical way. The world became political. 

> **Psychogeography** *[noun]* - the effect of a geographic location on the emotions and behaviours of individuals
> 

Returning to London after university, I saw a different city to the one I had left. Skyscrapers turned to ivory, and estates became what they always were - homes. And then I came to Finsbury Park. Finsbury Park is as close as you can come to magic. Yes it's a shithole, and yes I'm aestheticising it, but look closer and you'll see it. You'll really see it.

The dying days of a different time, where cultures mix and dance and sing.





### Art

Form follows function. What other art styles could I throw that would fit into that brutalist mantra? I could have veered back to modernism, but I returned to my childhood and the early days of the internet. Perhaps it was those transatlantic cables tightening at my wrists.

Quick scribbles on a virtual notepad:

* Glitches
* Lo-fi
* Vaporwave
* Zines

Would these work? I turned to Figma.


![](https://i.imgur.com/g9dBfwC.png)

Maybe they could.

___

## The Code

I needed movement. At first I experimented with cinemagraphs, before settling on a beautiful, haunting GIF from Patrick Keiller's seminal London (1994). But I still needed something else.

I came across a [codepen for redacted text](https://codepen.io/adamruf/pen/GZwdrY), and began to brainstorm. Redaction didn't quite fit in to the aesthetic - more cold war than post-war - but it had a subversive undertone that I could play with. So I brought in Laura Grace Ford's punk psychogeography, and twisted it to digital purposes.

The redacted text is composed of two layers - the text (in a p tag) and the ink overlay (in a span). Using keyframes I could increase the width of the ink overlay, redacting the text beneath. Reversing this animation proved more difficult though, as  changing the content of the text underneath *also* changed the width of the span on top.

![](https://i.imgur.com/41Anym0.png)


I tried linking the span's width to React states, but this was the wrong tack. I then thought that I could change the span's width to a set length, rather than correlating with the text length underneath, but how could I do this and keep my design responsive? Could I somehow measure the starting width of the span, using some kind of React module, and store it to use as the span's width throughout? This seemed tricky and resource-intensive.

I couldn't find a way out until I came across the 'ch' unit. The 'ch' unit, native to HTML, is a unit relative to the length of '0' as it appears on the page. In other words it allows you to specify lengths relative to text content (typeface dependent). A six letter string such as 'orange' would (theoretically) have a width of 6ch. 

![](https://i.imgur.com/mOoqi7r.png)

Bingo. I could set the span to the intial string's length in ch, and keep it the same throughout, even if the string underneath decreased in length. This would be responsive as the 'ch' unit would scale depending on the size of the text I was using (which was itself responsive, as it was measured in em). This has got to work, right?


### Back to the typewriter

There were two issues with this approach. 

(1) The animation has to work for multiple spans of different lengths. If the animation is set to oscillate between 0 and 6ch, it will only work for six-letter strings.

**Solution:** Pass in the length of each string as a parameter to the keyframes animation. We can do this using React styled components, passing the string as prop and then accessing the length using `props.length`. To keep this length consistent when changing the text content, we have to add in extra spaces to account for dropped characters (for example, if we want to change 'orange' to 'pear', we need to write 'pear  ' to keep the length at 6ch).

(2) Every letter in a typeface has a different width. Take 'orange' and 'pear  '. They are both six characters long, but do they look the same width to you? You can barely see that pear has two spaces after it. 'Ch' is a sham. It will never correlate to the actual width of my string!

**Solution:** I remembered from my time tapping away on my old Remington portable that the typeface there had the exact same width for each character, so that the carriage knows how much to move the roller. Such fonts are known as monospace fonts, and fitted in exactly with the aesthetic I was trying to go for. I switched my font over to 'Cutive Mono', a monospace typeface, and all was finally fixed!

![](https://i.imgur.com/UWxxCYY.jpg)

Who needs wired love?

___

## The End

![](https://i.imgur.com/BwEk5tO.png)

A few other issues followed. Loading up each animation at different intervals; creating a nav-bar with internal links to every section; the daily 'so you think you know flexbox?' meltdowns. But in the end, I was very happy with the finished product. There are some other features I want to add - an undo button for the redaction animation, a few more crackles and glitches to complete that 'lo-fi' aesthetic, and perhaps a musical beat to underscore the site as a subversive space.

But considering I set out to make a brutalist website, I think I did pretty well. After I finished work on my portfolio, I stumbled across a [collection of like-minded developers](https://brutalistwebsites.com), who had their own takes on brutalist web design. I don't think mine was far off, do you?

![](https://i.imgur.com/enfaYKE.png)

Of course, it's never brutalist to obscure your entire website's content. Form follows function, folks.


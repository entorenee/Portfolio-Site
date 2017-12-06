---
title: "A Week in Review: #100DaysOfCode Round 2, Week 1"
date: 2017-12-06 08:30:00 -0700
categories: [web development]
tags: [journal, "#100DaysOfCode"]
---
The second round of 100 Days of Code officially began for me on November 25, 2017. [The first one](% post_url 2017-11-27-top-5-things-i-took-away-from-completing-100-days-of-code %) was a fantastic success and a valuable tool for my growth and learning trajectory. The continued dedication and motivation to consistently be moving forward has brought me farther than I anticipated in a short period of time. Before starting this next round, I thought of some specific ideas and goals that I hope to reach.
<!--more-->

## Objectives for 100 Days of Code Round 2

**Redesign my portfolio website.** A high priority item is redesigning this site to better represent my current skillset in both design and technology utilized. I am currently working on this task and rebuilding my site with React and [Gatsby](https://www.gatsbyjs.org/). I also am using this opportunity to do a deep dive into two other development concepts that I haven't used heavily or at all before: CSS-in-JS styling and unit testing.

**Land a developer job.** I have kicked the job search into high gear. I know that I am ready for a job after building [Wanderful](http://www.wanderful-travel.com) and now just need to find an employer to take me on.

**Potentially start the next big project.** I have a couple ideas of some things that I may like to build out as a larger project that I cannot find like items online. There still is a lot more to mull over before committing to any of them though, as they would be rather large scale.

## Week 1 in Review

The first week has been off to a great start. I have been hard at work rebuilding my portfolio site, mostly from the ground up. I have ported over some things such as colors, header image, and some of the body copy. Other than that it's been a scratch and rewrite. I chose this approach for several reasons, the primary being that my skillset is much more advanced than it was in April/May when I built the 1st version of the site. That seems like ages ago. I am also transitioning to a completely different build system: from HTML and liquid templating using Jekyll, to React components aand Gatsby. I don't want to be trying to fit old code into a new vision. Even though some elements may end up similar in the rebuild, it is an opportunity to start fresh and make sure the code is using the best practices that I am now aware of.

Along with the rebuild, I decided to dive deeper into two development concepts that I was unfamiliar with: CSS-in-JS and unit testing. I try and incorporate something new into every project, because it is the way that I best learn the pros and cons of different systems. As part of that process, I tend to go to an extreme in my application of a concept and then throttle it down to what seems to be just below the point of diminishing returns. This is the approach that I am taking most with CSS-in-JS. My plan is to not write a single CSS file for the entire project rebuild, but to incorporate all of the styling through the use of the Emotion library. It took a little while to get used to the syntax the first few days, but now I am well adapted. The benefits include having all of the CSS in the same location for ease of portability, class name hashing to reduce style collisions, and more. I was able to implement the equivalent of Sass variables by creating my own theme. I could write a whole lot more on the topic, but will save that for another post. The start of it has been going well. As for unit testing, I got into that in the second week and will detail that next week.

The first week was a great success in my mind. I expected to be moving a bit faster with the site redesign, but slowing down on some of the details has been very valuable. There also was some mental model switching that had to take place because I had been working on backend code for so long. Plus the learning curve to create styled components slowed me down a little bit. Overall, I am happy with the progress that I made in the timeframe and the additional skills that I picked up. Plus, the redesign of the website (even rough implementation) is looking great.

* Day 1: Created a responsive header including mobile menu animations.
* Day 2: Completed majority of my 100 Days of Code Round 1 blog post.
* Day 3: Worked on the about portion of the page and struggled with incorporating SVGs. I also was able to explain React and Redux to someone who was brand new to them.
* Day 4: Rough implementation of Hero image and info cards was completed.
* Day 5: Created the rough implementation of the bio and basic project showcase carousel.
* Day 6: Created basic functionality to project carousel to allow cycling through projects loaded into the component
* Day 7: Connected with a recruiter and began researching unit testing.

If you are interested in following my daily progress on the challenge feel free to follow me on [Twitter](https://www.twitter.com/dslemay) or bookmark the stream of my [posts](https://twitter.com/search?f=tweets&q=%23100DaysOfCode%20from%3Adslemay%20since%3A2017-11-22&src=typd) with the #100DaysOfCode hashtag.
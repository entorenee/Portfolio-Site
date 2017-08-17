---
title: "#100DaysOfCode Week 1"
date: 2017-08-17 08:30:00 -0700
categories: [web development]
tags: [journal, "#100DaysOfCode"]
---
I started the #100DaysOfCode challenge a little over a week ago. It has been going really well, and I have been coding for an average of 1-2 hours per day. I have been making great progress on the front-end projects with Free Code Camp, having completed the [Pomodoro Timer](http://dslemay.com/projects/pomodoro-timer/) and started the Tic Tac Toe game. At the current rate of completing projects I may finish the last two projects ahead of my October 1st mental deadline. What I would like to do on these check in posts is identify some of the accomplishments and challenges I faced as well as any moments of reflective inspiration.
<!--more-->
Accomplishments:

* Through building the Pomodoro timer I solidified my understanding of the React framework, how to structure things, when lifecycle hooks would be beneficial and how to use many of them. I also branched out to having multiple components maintain state which was a first for me. In the project the App component maintains information about how long the session and break timers should be as well as if the timer is running. The Timer component maintains the timer length converted to milliseconds which is then directly manipulated to countdown the timer. I really enjoy React and find that it streamlines so much of my code.
* I took a short sojourn into learning about HTML canvas while exploring the idea of a ring on the outer edge of the timer component which would visually indicate how much time was left on the timer. The idea was that the ring would slowly close as the timer progressed. In the end I decided to have a cleaner interface and abandoned the idea. It was still valuable to mildly acquaint myself with Canvas.

Challenges:

* There were several React state bugs in my earlier versions of the timer that were mind boggling and took a long time to resolve. I kept on stepping away and coming back to it. Eventually, the issue was resolved by reducing the amount of complexity in the states I was managing and handling some of the work in the render method instead.
* The process of planning how to address the Tic Tac Toe project was very difficult especially with regard to the AI component. Most of that work was done in week 2 and will be highlighted next week, but the start of it happened on Day 7. I need to continue reminding myself to not get overwhelmed by the problem as a whole. As the entire project is broken down into smaller, more palpable tidbits, progress comes a bit easier.

I also had a bit of a Twitter rant with a big mental realization that I continue to tell myself and I think is worth repeating here. I have found applying writing concepts of rough drafts to my coding process a huge gain to my productivity & reducing angst. It allows me to avoid perfectionism at first pass, especially when I am learning something new and uncertain of how to do it. Creating smaller commits and not waiting until the new feature is at 80% completed mentally assures me mistakes are ok. There has been plenty of refactoring in my current project already, but I feel like I am making progress faster. The mindset has freed me from my mind melting into mush trying to play 10 turns ahead in chess without knowing the rules.

It's easy to think I should be farther or not struggle with something as much. The concept and desire for instant or near-instant gratification has so permeated society that struggling with a problem can become more than arduous. It can be easy, for me at least, to feel like I won't be able to figure something out. Breaking things down into smaller pieces, and coming back to problems has been instrumental in tackling these obstacles. We are all learning and will all face challenges. With persistence and the help of others we can overcome those hurdles and come out stronger and more knowledgable.

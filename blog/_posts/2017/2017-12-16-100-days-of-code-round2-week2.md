---
title: "#100DaysOfCode Round 2, Week 2 and Engaging with Test Driven Development"
date: 2017-12-16 09:00:00 -0700
categories: [web development]
tags: [journal, "#100DaysOfCode"]
---

![Successfully implementing some unit tests]({{ site.url }}/blog/assets/img/dist/2017/2017-12-testing.jpg)
Testing has definitely intimidated me. From the syntax to the general concepts, the whole thing seemed elusive. I planned on implementing testing from the start of the redesign, but delayed the implementation because I was also learning CSS-in-JS and didn't want to overwhelm myself too much. I had the website coming together and a fairly solid grasp on using Emotion by the end of week one, and it was time to make the leap.

For my testing environment I am using [Jest](http://facebook.github.io/jest/) as my test runner and [Enzyme](http://airbnb.io/enzyme/) to provide some React specific tooling. I read through all of the Jest documentation absorbing what I could and re-reading certain sections to gain at least a basic understanding of starting the process to apply it to my actual project. I skipped other tutorials that walked through a template project, knowing that I would absorb the most by working on my own project. Once I had everything set up for the test environment and a basic addition test was properly passing it was time to actually get started.
<!--more-->

The first couple tests were hard to write without question, but that is no different than any new things. I stumbled over some of the syntax, making the assertions properly, and ensuring that my components were properly mounted with the props that I wanted to test. One of the things that has made the learning process much more bearable is the feedback that Jest gives you in the process. Similar to React warnings if something breaks the render of an application, Jest provides very detailed feedback in the console about what caused the test to not run or pass. This feedback has proved essential to my learning process by guiding the learning process if there is an issue with how the test is written or the assertions it makes.

## When it all Clicked

I slowly worked through some of the backlog of components that I had already written and finding aspects of them that should be tested, and in the future, tested before or as they were being written. I gained enough confidence to tackle my project showcase carousel component which was currently the most complex component in the project. What changed everything was when I decided to test the module that holds the project information, and which the component relies on for proper rendering. The module is fairly simple; it is an array of obejcts, each object containing five key-value pairs. The shape of the data and the existence of each key-value pair is imperative to maintain proper functionality of the carousel which focuses on one item in the array and pulls all of the information off that particular object to populate the fields in the component. A small typo or deviation from the data shape can bring everything crashing down, and has done so in previous projects. I decided to see if writing tests could help solve this for me both in this project and similar situations in the future.

I created 8 tests to check the shape of the module to ensure that the data would render properly. The first three tests check for the overall structuring of the data, and the remaining 5 tests check the properties within each object. If the module is not formatted exactly the way it needs to be for proper rendering in the Carousel component one or more tests will fail. 

1. The exported module is an array so that it can be mapped over in the Carousel component.
2. The array must have a length of at least one or it will not be able to render.
3. Each index in the array must be an object.
4. Each object in the array has a `title` property that is truthy.
5. Each object in the array has a `image` property that is truthy.
6. Each object in the array has a `projectLink` property that is truthy.
7. Each object in the array has a `githubLink` property that is truthy.
8. Each object in the array has a `description` property that is truthy.

## The Week in Review

* Day 8: Set up my first testing environment using Jest and Enzyme, and wrote my first tests.
* Day 9: Implemented more tests and started to become more comfortable in it, and see some of the benefits.
* Day 10: More testing. I also added more functionaility to the project carousel on the site redesign.
* Day 11: Worked on the previous blog post and did some reasearch.
* Day 12: Researched React transitions and met with my first recruiter.
* Day 13: More unit testing and troubleshooting some bugs I was having (later found out I needed to implement some custom mocks).
* Day 14: Still more test writing and making some more components reusable.

As I finish this post up, week three is coming to an end which included a deeper dive into unit testing and building out the rest of the carousel component. Engaging with unit testing has been helpful to clarifying the way in which I approach coding and check that applications function as expected. There will be further discussion on this in next week's post.

If you are interested in following my daily progress on the challenge feel free to follow me on [Twitter](https://www.twitter.com/dslemay) or bookmark the stream of my [posts](https://twitter.com/search?f=tweets&q=%23100DaysOfCode%20from%3Adslemay%20since%3A2017-11-22&src=typd) with the #100DaysOfCode hashtag.
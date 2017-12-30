---
title: "#100DaysOfCode Round 2, Weeks 3 and 4"
date: 2017-12-30 07:30:00 -0700
categories: [web development]
tags: [journal, "#100DaysOfCode"]
---

![The Largely Finished Design of the Project Carousel]({{ site.url }}/blog/assets/img/dist/2017/2017-12-project-carousel.jpg)
With the holidays and travel, my development and writing time has been all over the place. It definitely is further evidence for how I benefit from routine and self-created structure. I still made progress in my development goals, but it did slow down. I knew this going in, and it was more important to be present and spend quality time with my family.

The past couple weeks have been productive for the site redesign. It's going slower than I anticipated, but learning and applying the new skills has been well worth it. I continue to get more comfortable with testing, although I know I am still scratching the tip of it. I need to dive into mocking more, as the concept and applications of it are still a bit elusive to me.
<!--more-->
I have made a lot of great progress and largely finalized the Project Carousel. This has definitely been the most involved component and portion of the site rebuild thus far, and I am excited to have it largely polished off. During this time I refactored several key parts of the logic including a means of passing whether the user was manually changing the project displayed or if it was done by the interval timer. This was an essential part of the UX, because the timer is reset each time the user manually changes the project. It is always one of my pet peeves when a site uses a carousel but doesn't reset the timer when a user manually changes the project. This results in an item being delayed less than the intended time before the timer automatically advances the project again. This was relatively easy to accomplish thanks to ES6 default arguments. I added a second argument to the method, which will reset the timer if it is included in the function call; if it is not included it will default to false and the timer will not be reset.

```
updateProject(direction, reset = false) {
  const projectTotal = projectSpotlight.length;
  let { currIndex: newIndex } = this.state;

  if (direction === 'next') {
    this.state.currIndex < projectTotal - 1 ? newIndex++ : (newIndex = 0);
  }

  if (direction === 'previous') {
    this.state.currIndex > 0 ? newIndex-- : (newIndex = projectTotal - 1);
  }

  if (typeof direction === 'number') {
    newIndex = direction;
  }

  if (this.state.isPlaying && reset) {
    this.resetIntervalTimer();
  }

  this.setState({ currIndex: newIndex });
}
```

I also ran into an unanticipated challenge for the carousel on mobile devices. Previously, I had relied on a hover transition to display the carousel controls. However, this would not translate over to mobile devices due to the lack of a persistent cursor. I initially set out to create a better implementation of the controls for mobile devices and largely landed at the current implementation shown above. However, I ran into some logistical issues about how to reliably determine if the device had a touchscreen. Traditional media queries weren't an option either as the screen resolution of some tablets would also capture small laptop screens. Eventually, I decide to scuttle the initial implementation of the carousel controls in favor of a more discoverable implementation.

Lastly, I finally decided it was time to start investing the time to learn CSS Grid. I want to implement some more interesting and assymetric designs which have been harder to implement with my current layout toolbelt. The primary driver is a more engaging 'About' section in the redesign. I like the direction of the first draft, but it is still too blocky and needs more work. I have a couple grid concepts sketched out and have familiarized myself with the basics of using CSS Grid. I still have some more research to do to better understand how to reflow the grid for smaller screen sizes.

Things continue to move forward despite some lighter days in the past week, and some days which were skipped entirely due to travel or family activities. I'm down to the last couple large tasks for the site redesign, not including migrating all of the posts over. The next push will be utilziing CSS Grid and adding the contact form to largely finish out the main page. I still need to design the blog index and individual post layouts, as well as using GraphQL to pull all of the data for the posts.

## The Weeks in Review

* Day 15: I worked through some more testing issues and applied to five more jobs.
* Day 16: I spent a couple of hours helping someone debug their React application and better understand best practices. I made some more progress on testing the portfolio site.
* Day 17: I refactored the logic for my project carousel and updated the respective tests.
* Day 18: I wrote 6 more tests and refactored the project carousel component significantly. I added a timer reset when the user manually changes the project displayed.
* Day 19: I worked on most of the Week 2 recap blog post and also started creating a button component. I also went to an excellent React meetup.
* Day 20: I mostly finished up the button component and made it reusable.
* Day 21: I finished setting up the props and testing the button component.
* Day 22: I finished the button component and started tweaking the project carousel design. I realized that the first implementation of controls for the carousel wouldn't work on mobile, due to the lack of a persistent cursor.
* Day 23: I made progress on creating mobile friendly controls for the project carousel.
* Day 24: The mobile controls were made fully functional.
* Day 25: The project carousel was largely completed minus adding some final styling and transitions.
* Day 26: I worked on familiarizing myself with CSS Grid and started brainstorming some different design ideas for the 'About' section.
* Day 27: I worked on learning more about CSS Grid.
* Day 28: More CSS Grid. I also began an attempt to remove some of the business logic from the project carousel to reuse it for a quote display that I want to include. I think that I need to create and utilize a higher order component.

If you are interested in following my daily progress on the challenge feel free to follow me on [Twitter](https://www.twitter.com/dslemay) or bookmark the stream of my [posts](https://twitter.com/search?f=tweets&q=%23100DaysOfCode%20from%3Adslemay%20since%3A2017-11-22&src=typd) with the #100DaysOfCode hashtag.
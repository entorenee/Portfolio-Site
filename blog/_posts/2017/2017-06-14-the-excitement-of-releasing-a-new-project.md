---
title: The Excitement of Releasing a New Project
date: 2017-06-14 06:30:00 -0700
categories: [web development]
tags: [journal, projects]
---
![Image of code from Twitch Viewer Project]({{ site.url}}/blog/assets/img/2017-06-twitch-code.jpeg)
It is always an exciting day to release a new project into the wild. After a week of active development, and a couple days doing minor tweaks, I’m happy to have my [Twitch Viewer](http://dslemay.com/twitch-viewer/) project live. This particular project was an interesting development in my skills with Javascript particularly. It was the first time that I dynamically created a Javascript object for a myriad of users based off of data polled from multiple API calls. After finally figuring out the constructor function the rest of the project built out quickly within a couple days. What was the most difficult challenge for me, was dealing with the asynchronous population of the object data, due to the API calls, and when to call the displayUsers function.

Initially, I had created a manual timer that waited about 800ms before calling the display function. However, this was a hack to be able to tweak the project output and styling. I knew that I could not rely on it in a production environment, because if the data took a few milliseconds longer to populate I was SOL. So I began a painful journey into learning how to utilize Javascript promises to ensure the data was populated before displaying it. I may have a few less hairs on my head from going back and forth on that. Thankfully, no computers were harmed in the learning frustration. After I finally got it working, I was able to refactor the code to display each user after their user data is populated rather than wait until all of the users are retrieved. While this isn’t the biggest change visually due to the low bandwidth of the API calls, it will help the project scale up as well as implement best practices.
<!--more-->
I continue to be amazed and excited that I couldn’t write a single line of code 2.5 months ago, and am now publishing my most complex project to data. The Javascript file tops out at 205 lines of code. 70 days ago I didn’t know anything about Javascript. I still have a lot more to learn, but reflecting on the progress thus far provides a nice motivation boost to maintain the current momentum.

The next steps in my development journey are working on the intermediate and advanced algorithms over at [Free Code Camp](https://www.freecodecamp.com) as I continue their front end developer certification. I have 21 of those left to crank through before moving onto their final four advanced projects. Once those are completed, I will receive my front-end developer certification. I’m hoping to have it all completed in the Fall and then see where this journey leads me to next.

Thank you for checking out this post and the project that just went live. You connect with me [here]({{ site.url}}/#contact) or on Twitter [@dslemay](http://twitter.com/dslemay). You can find the source code and commit history for this project on my [Github](https://www.github.com/dslemay/twitch-viewer).

# Twitch Viewer API Project

This project is part of the Free Code Camp front-end developer certification program. The purpose of this project is to
create a web application that will display if a Twitch user is streaming, and if so provide additional information.
The objectives of the challenges have been copied below, and the full page of the challenge can be found at
[Free Code Camp](https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api).

In addition to the user stories below I also added functionality for a set update interval of 5 minutes, with the ability
for the user to manually poll for updates. In order to add or subtract users from the viewer, the users array at the top of
the Javascript file can be updated. Prior to polling the API and displaying the data, the script removes any items which are
not a string, and pushes all of the string items to the twitchUsers array which is the base for the viewer.

June 28, 2017: I have added the ability to use localstorage to tailor the users displayed to the preferences of the end
user. Upon initial load, if there are no values stored in localstorage, a default array of users will populate the object.
If there are users stored in localstorage the app will read the values from storage and ignore the default initial users
array. End users are able to add and remove which Twitch users are displayed.

1. Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/Myvqmo/.
2. Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.
3. User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.
4. User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
5. User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.
6. User Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.
7. Hint: See an example call to Twitch.tv's JSONP API at http://forum.freecodecamp.com/t/use-the-twitchtv-json-api/19541.
8. Hint: The relevant documentation about this API call is here: https://dev.twitch.tv/docs/v5/reference/streams/#get-stream-by-user.
9. Hint: Here's an array of the Twitch.tv usernames of people who regularly stream: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
10. UPDATE: Due to a change in conditions on API usage explained here Twitch.tv now requires an API key, but we've built a workaround. Use https://wind-bow.gomix.me/twitch-api instead of twitch's API base URL (i.e. https://api.twitch.tv/kraken ) and you'll still be able to get account information, without needing to sign up for an API key.
11. Remember to use Read-Search-Ask if you get stuck.
12. When you are finished, click the "I've completed this challenge" button and include a link to your CodePen.
13. You can get feedback on your project by sharing it with your friends on Facebook.

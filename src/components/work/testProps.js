const testProps = {
  data: {
    contentfulSlideshow: {
      slides: [
        {
          title: 'Wanderful',
          description: {
            description:
              "Wanderful is a web app to connect users with fun, randomized destinations and things to do when they get there. Upon visiting the site, users are able to click on a button and be directed to a destination details page for a randomly generated location from the database. Here users can view a brief description of the location and details such as hotels, restaurants, and entertainment available at the location. Additionally, users can get flight information to the destination's nearest airport. Users are also able to create an account which allows them to save their favorite destinations and points of interest for later retrieval on the user's dashboard.",
          },
          projectImage: {
            fluid: {
              src: '//images.ctfassets.net/024qyvhyq0tv/xzgpz7GytMo0MaoysUESc/e2f2578e76ccd7ab438180bdee041c73/wanderful-thumb.jpg?w=800&q=50',
              srcSet:
                '//images.ctfassets.net/024qyvhyq0tv/xzgpz7GytMo0MaoysUESc/e2f2578e76ccd7ab438180bdee041c73/wanderful-thumb.jpg?w=200&h=103&q=50 200w,\n//images.ctfassets.net/024qyvhyq0tv/xzgpz7GytMo0MaoysUESc/e2f2578e76ccd7ab438180bdee041c73/wanderful-thumb.jpg?w=400&h=206&q=50 400w,\n//images.ctfassets.net/024qyvhyq0tv/xzgpz7GytMo0MaoysUESc/e2f2578e76ccd7ab438180bdee041c73/wanderful-thumb.jpg?w=800&h=412&q=50 800w',
              sizes: '(max-width: 800px) 100vw, 800px',
              aspectRatio: 1.941747572815534,
            },
            title: 'Wanderful Travel application',
          },
          links: [
            {
              text: 'Link to Live Project',
              url: 'https://www.wanderful-travel.com',
            },
            {
              text: 'Link to GitHub Repository',
              url: 'https://github.com/chingu-coders/Voyage2-Bears-11',
            },
          ],
        },
        {
          title: 'Simon Game',
          description: {
            description:
              'This recreation of a classic is built using React. The user takes turns playing a randomly generated pattern that the computer displays. If the player can successfully complete 20 turns, they win. If the user makes a mistake in the pattern, a buzzer noise will sound. If strict mode is not active, the computer will play the pattern for the user again. If strict mode is enabled, the current pattern will be erased and the game will start over. The game is also responsive on smaller devices.',
          },
          projectImage: {
            fluid: {
              src: '//images.ctfassets.net/024qyvhyq0tv/7fcE80uEbC8SE26YkeUOw0/95eae8a5ff295c82f0beb74ebd051f14/simon-thumb.jpg?w=800&q=50',
              srcSet:
                '//images.ctfassets.net/024qyvhyq0tv/7fcE80uEbC8SE26YkeUOw0/95eae8a5ff295c82f0beb74ebd051f14/simon-thumb.jpg?w=200&h=122&q=50 200w,\n//images.ctfassets.net/024qyvhyq0tv/7fcE80uEbC8SE26YkeUOw0/95eae8a5ff295c82f0beb74ebd051f14/simon-thumb.jpg?w=400&h=243&q=50 400w,\n//images.ctfassets.net/024qyvhyq0tv/7fcE80uEbC8SE26YkeUOw0/95eae8a5ff295c82f0beb74ebd051f14/simon-thumb.jpg?w=800&h=486&q=50 800w',
              sizes: '(max-width: 800px) 100vw, 800px',
              aspectRatio: 1.646090534979424,
            },
            title: 'Simon Game application',
          },
          links: [
            {
              text: 'Link to Live Project',
              url: '/projects/simon-game',
            },
            {
              text: 'Link to GitHub Repository',
              url: 'https://github.com/dslemay/simon-game/',
            },
          ],
        },
        {
          title: 'Tic Tac Toe Game',
          description: {
            description:
              'The Tic Tac Toe Game is built using React and allows the user to play a game against a computer. Upon first load the player is offered the option of playing as X or O; X always plays first. The computer AI runs through a priority of move options. First, it looks for the ability to win the game. If this is not possible, but the player can win the game next turn the computer will block the player. Finally, if neither of these are possible, the computer will play in a random empty cell.',
          },
          projectImage: {
            fluid: {
              src: '//images.ctfassets.net/024qyvhyq0tv/3rHdlaoRgIY0QKMMUQuQIY/f4d3d15008dd0129bdc57411e93ce209/tic-tac-toe-thumb.jpg?w=800&q=50',
              srcSet:
                '//images.ctfassets.net/024qyvhyq0tv/3rHdlaoRgIY0QKMMUQuQIY/f4d3d15008dd0129bdc57411e93ce209/tic-tac-toe-thumb.jpg?w=200&h=122&q=50 200w,\n//images.ctfassets.net/024qyvhyq0tv/3rHdlaoRgIY0QKMMUQuQIY/f4d3d15008dd0129bdc57411e93ce209/tic-tac-toe-thumb.jpg?w=400&h=243&q=50 400w,\n//images.ctfassets.net/024qyvhyq0tv/3rHdlaoRgIY0QKMMUQuQIY/f4d3d15008dd0129bdc57411e93ce209/tic-tac-toe-thumb.jpg?w=800&h=486&q=50 800w',
              sizes: '(max-width: 800px) 100vw, 800px',
              aspectRatio: 1.646090534979424,
            },
            title: 'Tic Tac Toe game',
          },
          links: [
            {
              text: 'Link to Live Project',
              url: '/projects/tic-tac-toe',
            },
            {
              text: 'Link to GitHub Repository',
              url: 'https://github.com/dslemay/tic-tac-toe/',
            },
          ],
        },
        {
          title: 'Pomodoro Timer',
          description: {
            description:
              'The Pomodoro Timer is built using React and allows the user to specify the session and break times that they wish to use in increments of one minute. Clicking on the circle countdown asset starts or stops the timer. When a timer completes, a gong sound effect plays, and the timer will automatically switch to the next timer, alternating between sessions and breaks. The user may reset a timer by adjusting the time with one of the counters when the timer is paused. While the timer is running, the buttons to increase or decrease the timer are disconnected. Lastly, the title bar of the tab also dynamically updates with the current time remainging and the timer that is running for a quick visual cue if open with other tabs.\n',
          },
          projectImage: {
            fluid: {
              src: '//images.ctfassets.net/024qyvhyq0tv/2a8UgnpPyEIyuy8Q8iuSWC/662c60c4ec8d8cb4c32c7ffada302a5c/pomodoro-thumb.jpg?w=800&q=50',
              srcSet:
                '//images.ctfassets.net/024qyvhyq0tv/2a8UgnpPyEIyuy8Q8iuSWC/662c60c4ec8d8cb4c32c7ffada302a5c/pomodoro-thumb.jpg?w=200&h=122&q=50 200w,\n//images.ctfassets.net/024qyvhyq0tv/2a8UgnpPyEIyuy8Q8iuSWC/662c60c4ec8d8cb4c32c7ffada302a5c/pomodoro-thumb.jpg?w=400&h=243&q=50 400w,\n//images.ctfassets.net/024qyvhyq0tv/2a8UgnpPyEIyuy8Q8iuSWC/662c60c4ec8d8cb4c32c7ffada302a5c/pomodoro-thumb.jpg?w=800&h=486&q=50 800w',
              sizes: '(max-width: 800px) 100vw, 800px',
              aspectRatio: 1.646090534979424,
            },
            title: 'Pomodoro Timer',
          },
          links: [
            {
              text: 'Link to Live Project',
              url: '/projects/pomodoro-timer',
            },
            {
              text: 'Link to GitHub Repository',
              url: 'https://github.com/dslemay/pomodoro-timer/',
            },
          ],
        },
      ],
    },
  },
}

export default testProps

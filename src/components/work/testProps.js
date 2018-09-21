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
            file: {
              url: 'photo-stub',
            },
            description: 'Sample description',
          },
          links: [
            {
              text: 'Link to Live Project',
              url: 'http://www.wanderful-travel.com',
            },
            {
              text: 'Link to GitHub',
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
            file: {
              url: 'photo-stub',
            },
            description: 'sample description',
          },
          links: [
            {
              text: 'Link to Live Project',
              url: '/projects/simon-game',
            },
            {
              text: 'Link to Github',
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
            file: {
              url: 'photo-stub',
            },
            description: 'sample description',
          },
          links: [
            {
              text: 'Link to Live Project',
              url: '/projects/tic-tac-toe',
            },
            {
              text: 'Link to Github',
              url: 'https://github.com/dslemay/tic-tac-toe/',
            },
          ],
        },
      ],
    },
  },
};

export default testProps;

import wanderfulThumb from '../../../assets/img/projects/wanderful-thumb.jpg';
import simonThumb from '../../../assets/img/projects/simon-thumb.jpg';
import ticTacToeThumb from '../../../assets/img/projects/tic-tac-toe-thumb.jpg';
import pomodoroThumb from '../../../assets/img/projects/pomodoro-thumb.jpg';
import calculatorThumb from '../../../assets/img/projects/calculator-thumb.jpg';

const projectSpotlight = [
  {
    title: 'Wanderful',
    image: wanderfulThumb,
    projectLink: 'http://www.wanderful-travel.com',
    githubLink: 'https://github.com/chingu-coders/Voyage2-Bears-11',
    description:
      "<p>Wanderful is a web app to connect users with fun, randomized destinations and things to do when they get there. Upon visiting the site, users are able to click on a button and be directed to a destination details page for a randomly generated location from the database. Here users can view a brief description of the location and details such as hotels, restaurants, and entertainment available at the location. Additionally, users can get flight information to the destination's nearest airport. Users are also able to create an account which allows them to save their favorite destinations and points of interest for later retrieval on the user's dashboard.</p>",
  },
  {
    title: 'Simon Game',
    image: simonThumb,
    projectLink: '/projects/simon-game',
    githubLink: 'https://github.com/dslemay/simon-game/',
    description:
      '<p>This recreation of a classic is built using React. The user takes turns playing a randomly generated pattern that the computer displays. If the player can successfully complete 20 turns, they win. If the user makes a mistake in the pattern, a buzzer noise will sound. If strict mode is not active, the computer will play the pattern for the user again. If strict mode is enabled, the current pattern will be erased and the game will start over. The game is also responsive on smaller devices.</p>',
  },
  {
    title: 'Tic Tac Toe Game',
    image: ticTacToeThumb,
    projectLink: '/projects/tic-tac-toe',
    githubLink: 'https://github.com/dslemay/tic-tac-toe/',
    description:
      '<p>The Tic Tac Toe Game is built using React and allows the user to play a game against a computer. Upon first load the player is offered the option of playing as X or O; X always plays first. The computer AI runs through a priority of move options. First, it looks for the ability to win the game. If this is not possible, but the player can win the game next turn the computer will block the player. Finally, if neither of these are possible, the computer will play in a random empty cell.</p>',
  },
  {
    title: 'Pomodoro Timer',
    image: pomodoroThumb,
    projectLink: '/projects/pomodoro-timer',
    githubLink: 'https://github.com/dslemay/pomodoro-timer/',
    description:
      '<p>The Pomodoro Timer is built using React and allows the user to specify the session and break times that they wish to use in increments of one minute. Clicking on the circle countdown asset starts or stops the timer. When a timer completes, a gong sound effect plays, and the timer will automatically switch to the next timer, alternating between sessions and breaks. The user may reset a timer by adjusting the time with one of the counters when the timer is paused. While the timer is running, the buttons to increase or decrease the timer are disconnected. Lastly, the title bar of the tab also dynamically updates with the current time remainging and the timer that is running for a quick visual cue if open with other tabs.</p>',
  },
  {
    title: 'JavaScript Calculator',
    image: calculatorThumb,
    projectLink: '/projects/javascript-calculator',
    githubLink: 'https://github.com/dslemay/javascript-calculator/',
    description:
      '<p>This calculator is built in React and is fully functional for basic math operations as well as converting items to a percentage and handling negative numbers. The calculator keys have animation and highlighting when pressed. Additionally, the calculator utilizes a custom display of scientific notation, differing visually from the default JavaScript implementation slightly, while also checking to make sure that the display does not overflow.</p>',
  },
];

export default projectSpotlight;

import { css } from 'emotion';

const theme = {
  baseColor: '#2D3B7F',
  lightAccent: '#A6B6FF',
  mediumAccent: '#5A77FF',
  darkAccent: '#485FCC',
  margins: css`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 450px) {
      width: 90%;
    }
  `
};

export default theme;

import { css } from 'emotion';

const themeUtils = {
  baseColor: '#2D3B7F',
  lightAccent: '#AFB8E6',
  mediumAccent: '#656E9A',
  complementaryLight: '#E6D8AF',
  complementaryDark: '#9A8956',
  margins: css`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 450px) {
      width: 90%;
    }
  `,
};

export default themeUtils;
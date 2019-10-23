import { css } from '@emotion/core'

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
  tablet: '(max-width: 1024px)',
  mobile: '(max-width: 454px)',
}

export const h1 = css`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media ${themeUtils.mobile} {
    font-size: 2rem;
  }
`

export const hideElement = css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`

export default themeUtils
